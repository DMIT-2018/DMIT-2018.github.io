---
title: LinqPad - Querying Occupied Tables
---
# LinqPad - Querying Occupied Tables

In this sample, we build a **multi-step query** to get the table information for the Front Desk (with billing for walk-ins and reservations).

Can't use DateTime.Date in Linq to Entities - check out [Date and Time Canonical Functions](http://msdn.microsoft.com/en-us/library/bb738563%28VS.100%29.aspx) and [How to: Call Canonical Functions](http://msdn.microsoft.com/en-us/library/dd456873.aspx) and ...

- LinqPad Prep - C# Statements - Create variables for date & time LinqPad Code

```csharp
// Find out information on the tables in the restaurant at a specific date/time
// Create a date and time object to use for sample input data
var date = Bills.Max(b => b.BillDate).Date;
var time = Bills.Max(b => b.BillDate).TimeOfDay.Add(new TimeSpan(0, 30, 0));
date.Add(time).Dump("The test date/time I am using");

```

- LinqPad - Step 1 - Get the table info along with any walk-in bills and reservation bills for the specific time slot LinqPad Code
  - Table occupancy for a given point of time can be determined by examining the Bill's BillDate and OrderPaid information: If the point of time we are using falls within the date/time that the customers were seated (BillDate) and when they finished their meal (OrderPaid), then they are occupying a table at the time. Thus, we can examine these values in the Bills table for each table in the restaurant.
  - It's important to note that any given Bill can be attributed either directly to a single table or to a reservation. That is because there are two kinds of customers: Walk-Ins and Reservations. This has an implication in finding the occupancy of the restaurant. There are two ways to get from Tables to the Bills: directly from Tables to Bills, or indirectly through the ReservationTables and Reservations.

![Tables for Walk-In Billing](./Walk-In-Occupancy.png)

![Tables for Reservation Billing](./Reservation-Occupancy.png)

```csharp
// Step 1 - Get the table info along with any walk-in bills and reservation bills for the specific time slot
var step1 = from data in Tables
                select new
                {
                Table = data.TableNumber,
                Seating = data.Capacity,
                // This sub-query gets the bills for walk-in customers
                WalkIns = from walkIn in data.Bills
                        where 
                                walkIn.BillDate.Year == date.Year
                            && walkIn.BillDate.Month == date.Month
                            && walkIn.BillDate.Day == date.Day
                            && walkIn.BillDate.TimeOfDay <= time
                            && (!walkIn.OrderPaid.HasValue || walkIn.OrderPaid.Value >= time)
//                          && (!walkIn.PaidStatus || walkIn.OrderPaid >= time)
                        select walkIn,
                    // This sub-query gets the bills for reservations
                    Reservations = from booking in data.ReservationTables
                        from reservationParty in booking.Reservation.Bills
                        where 
                                reservationParty.BillDate.Year == date.Year
                            && reservationParty.BillDate.Month == date.Month
                            && reservationParty.BillDate.Day == date.Day
                            && reservationParty.BillDate.TimeOfDay <= time
                            && (!reservationParty.OrderPaid.HasValue || reservationParty.OrderPaid.Value >= time)
//                          && (!reservationParty.PaidStatus || reservationParty.OrderPaid >= time)
                        select reservationParty
                };
step1.Dump();
```

- LinqPad - Step 2 - Union the walk-in bills and the reservation bills while extracting the relevant bill info
  - Do this first without the `.ToList()` to show the error "Types in Union or Concat are constructed incompatibly".

```csharp
// Step 2 - Union the walk-in bills and the reservation bills while extracting the relevant bill info
// .ToList() helps resolve the "Types in Union or Concat are constructed incompatibly" error
var step2 = from data in step1.ToList() // .ToList() forces the first result set to be in memory
            select new
            {
                Table = data.Table,
                Seating = data.Seating,
                CommonBilling = from info in data.WalkIns.Union(data.Reservations)
                                select new // info
                                {
                                    BillID = info.BillID,
                                    BillTotal = info.BillItems.Sum(bi => bi.Quantity * bi.SalePrice),
                                    Waiter = info.Waiter.FirstName,
                                    Reservation = info.Reservation
                                }
            };
step2.Dump();
```

- LinqPad - Step 3 - Get just the first CommonBilling item LinqPad Code

```csharp
// Step 3 - Get just the first CommonBilling item
//         (presumes no overlaps can occur - i.e., two groups at the same table at the same time)
var step3 = from data in step2.ToList()
            select new
            {
                Table = data.Table,
                Seating = data.Seating,
                Taken = data.CommonBilling.Count() > 0,
                // .FirstOrDefault() is effectively "flattening" my collection of 1 item into a 
                // single object whose properties I can get in step 4 using the dot (.) operator
                CommonBilling = data.CommonBilling.FirstOrDefault()
            };
step3.Dump();
```

- LinqPad - Step 4 - Build our intended seating summary info var step4 = from data in step3 LinqPad Code

```csharp
// Step 4 - Build our intended seating summary info
var step4 = from data in step3
            select new // SeatingSummary() // the DTO class to use in my BLL
            {
                Table = data.Table,
                Seating = data.Seating,
                Taken = data.Taken,
                // use a ternary expression to conditionally get the bill id (if it exists)
                BillID = data.Taken ?               // if(data.Taken)
                            data.CommonBilling.BillID  // value to use if true
                        : (int?) null,               // value to use if false
                BillTotal = data.Taken ? 
                            data.CommonBilling.BillTotal : (decimal?) null,
                Waiter = data.Taken ? data.CommonBilling.Waiter : (string) null,
                ReservationName = data.Taken ?
                                    (data.CommonBilling.Reservation != null ?
                                    data.CommonBilling.Reservation.CustomerName : (string) null)
                                : (string) null
            };
step4.Dump();
```
