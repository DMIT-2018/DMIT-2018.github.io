---
title: C# Statements in LinqPad
---
# C# Statements

When using the statement context in LinqPad, you write complete lines of code as though you were writing in the body of a method. To output results in LinqPad, you need to use the `.Dump()` extension method on the objects you want to output.

## A Series of Examples

This example of C# Statements in LinqPad include both LINQ Queries on database tables and simple arrays.

```csharp
/* Example 1: Querying data from Northwind */
var result = from row in Products
			 where row.UnitPrice > 50
			 select row;

// The following line won't work in your VS project....
result.Dump(); // the .Dump() method is an extension method in LinqPad - it's not in .NET
			   /* Example 2: Query a simple array of strings */
string[] names = { "Dan", "Don", "Sam", "Dwayne", "Laurel", "Steve" };
names.Dump();
var shortList = from person in names
				where person.StartsWith("D")
				select person;
shortList.Dump();

/* Example 3: Find the Orders that are due to be shipped */
var toShip = from due in Orders
             where !due.ShippedDate.HasValue
             orderby due.RequiredDate
             select new // declaring an "anonymous type" on-the-fly
             {          // using an initializer list to set the properties
                 RequiredOn = due.RequiredDate,
                 Shipper = due.ShipViaShipper.CompanyName
             };
toShip.Count().Dump(); // show the count of items
toShip.Take(5).Dump(); // show the first 5 items
```

![Statements example 1 - Results](./results/Statements-1.png)

---

## Income and Business Volume Summary

LinqPad allows you to set a title for your output by sending a string into the `.Dump()` method.

The following query shows the total income for the previous month and the number of patrons served.

```csharp
// Get the following from the Bills table for the past month:
// BillDate, ID, people served, total potentially billable (BillItem.Quantity * BillItem.UnitCost),
// and actual amount billed
// Then display the total income for the month and the number of patrons served.
var billsThisMonth = from item in Bills
                     where item.PaidStatus 
                     && item.BillDate.Month == DateTime.Today.Month -1
                     && item.BillDate.Year == DateTime.Today.Year
                     orderby item.BillDate descending
                     select new
                     {
                         BillDate = item.BillDate,
                         BillId = item.BillID,
                         NumberInParty = item.NumberInParty,
                         TotalBillable = item.BillItems.Sum (bi => bi.Quantity * bi.UnitCost),
                         ActualBillTotal = item.BillItems.Sum (bi => bi.Quantity * bi.SalePrice)
                     };
var title  = string.Format("Total income for {0} {1}",DateTime.Today.AddMonths(-1).ToString("MMMM"),DateTime.Today.Year);
billsThisMonth.Sum (tm => tm.ActualBillTotal).ToString("C").Dump(title, true);
billsThisMonth.Sum (tm => tm.NumberInParty).Dump("Patrons served", true);
```

![Statement example 2 - Results](LinqPad/results/Statements-2.png)

---

## Daily Income Report

With LinqPad, you can incrementally build your queries in multiple statements.

```csharp
// Get the following from the Bills table for the current month:
// BillDate, ID, people served, total potentially billable (BillItem.Quantity * BillItem.UnitCost),
// and actual amount billed
// Then display the total income for the month and the number of patrons served.
var billsThisMonth = from item in Bills
                     where item.PaidStatus 
                     && item.BillDate.Month == DateTime.Today.Month - 1
                     && item.BillDate.Year == DateTime.Today.Year
                     orderby item.BillDate descending
                     select new
                     {
                         BillDate = item.BillDate,
                         BillId = item.BillID,
                         NumberInParty = item.NumberInParty,
                         TotalBillable = item.BillItems.Sum (bi => bi.Quantity * bi.UnitCost),
                         ActualBillTotal = item.BillItems.Sum (bi => bi.Quantity * bi.SalePrice)
                     };
var title  = string.Format("Total income for {0} {1}",DateTime.Today.AddMonths(-1).ToString("MMMM"),DateTime.Today.Year);
billsThisMonth.Sum (tm => tm.ActualBillTotal).ToString("C").Dump(title, true);
billsThisMonth.Sum (tm => tm.NumberInParty).Dump("Patrons served", true);
var report = from item in billsThisMonth
             group item by item.BillDate.Day into dailySummary
             select new
             {
                Day = dailySummary.Key,
                DailyPatrons = dailySummary.Sum(s => s.NumberInParty),
                Income = dailySummary.Sum (s => s.ActualBillTotal)
             };
report.OrderBy (r => r.Day).Dump("Daily Income");
// extra diagnostics/details
// billsThisMonth.Take(5).Dump("Top Five bills in collection");
// Bills.Single(b => b.BillID == 21194).BillItems.Dump("Bill Items on Bill # 21194");
```

![Statement example 3 - Results](LinqPad/results/Statements-3.png)
