---
title: "PostgreSQL Indexing Strategies That Actually Work in Production"
description: "Practical PostgreSQL indexing strategies from real ERP and SaaS systems — covering composite indexes, partial indexes, and EF Core query optimization."
date: "2026-04-10"
category: "database"
tags: ["PostgreSQL", "Database", "Performance", "EF Core"]
---

## The Problem With Generic Indexing Advice

Most PostgreSQL indexing guides tell you to "add an index on columns you query frequently." That's not wrong, but it's not enough when you're running an ERP system with complex joins across sales, inventory, and accounting tables.

Here's what I've learned from optimizing queries in production multi-tenant systems.

## Start With EXPLAIN ANALYZE

Before adding any index, understand what PostgreSQL is actually doing:

```sql
EXPLAIN ANALYZE
SELECT * FROM sales_orders
WHERE tenant_id = 'abc' AND status = 'pending'
ORDER BY created_at DESC
LIMIT 50;
```

Look for sequential scans on large tables, high row estimates vs. actual rows, and sort operations that could be eliminated with proper index ordering.

## Composite Indexes: Column Order Matters

For multi-tenant systems, the tenant column should almost always be the leading column:

```sql
CREATE INDEX idx_sales_orders_tenant_status_date
ON sales_orders (tenant_id, status, created_at DESC);
```

This index serves three query patterns:
1. All orders for a tenant
2. Orders for a tenant filtered by status
3. Orders for a tenant filtered by status, sorted by date

The order follows the "equality first, range last" principle.

## Partial Indexes for Hot Paths

If 90% of your queries filter on `status = 'active'`, a partial index is smaller and faster:

```sql
CREATE INDEX idx_active_orders
ON sales_orders (tenant_id, created_at DESC)
WHERE status = 'active';
```

This is particularly effective for dashboards that always show current/active records.

## EF Core: Avoiding N+1 Without Over-Fetching

The most common performance issue in EF Core isn't missing indexes — it's N+1 queries from lazy loading:

```csharp
// Bad: N+1 queries
var orders = await _context.Orders.ToListAsync();
foreach (var order in orders)
    Console.WriteLine(order.Customer.Name); // Separate query per order

// Good: Eager loading
var orders = await _context.Orders
    .Include(o => o.Customer)
    .Where(o => o.TenantId == tenantId)
    .OrderByDescending(o => o.CreatedAt)
    .Take(50)
    .ToListAsync();
```

Use `.AsSplitQuery()` when including multiple collections to avoid cartesian explosion.

## Monitoring: pg_stat_statements

Enable `pg_stat_statements` to find your slowest queries in production:

```sql
SELECT query, calls, mean_exec_time, total_exec_time
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;
```

Focus optimization effort on queries with high `total_exec_time` — that's calls × mean time.

## Results

Applying these strategies on a reporting module:
- Dashboard load time: 2.4s → 1.1s (54% improvement)
- Report generation: 8s → 3.2s (60% improvement)
- Database CPU usage: reduced by 35% during peak hours

## Takeaway

Indexing is not about adding indexes everywhere — it's about understanding your query patterns and creating indexes that serve them efficiently. Start with EXPLAIN ANALYZE, focus on your hottest paths, and measure the impact of every change.
