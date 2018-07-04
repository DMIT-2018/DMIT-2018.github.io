---
title: LinqPad - Querying Reservations
---
# LinqPad - Querying Reservations

In this sample, we try to get the Reservation information we need for a specific date (sorted).

- LinqPad C# Program to pass in a Date and get the reservations for that date LinqPad Code

```csharp
void Main()
{
  var date = new DateTime(2014, 10, 24);
  date.Dump();
  ReservationsByTime(date).Dump();
}
// Define other methods and classes here
public List<dynamic> ReservationsByTime(DateTime date)
{
  var result = from data in Reservations
        where data.ReservationDate.Year == date.Year
          && data.ReservationDate.Month == date.Month
          && data.ReservationDate.Day == date.Day
          && data.ReservationStatus == 'B' // Reservation.Booked
        select new // DTOs.ReservationSummary()
        {
          Name = data.CustomerName,
          Date = data.ReservationDate,
          NumberInParty = data.NumberInParty,
          Status = data.ReservationStatus,
          Event = data.SpecialEvents.Description,
          Contact = data.ContactPhone
// /*Just for curiosity's sake*/      , Tables = from seat in data.ReservationTables
//                                               select seat.Table.TableNumber
        };
  var finalResult = from item in result
            group item by item.Date.TimeOfDay;
  return finalResult.ToList<dynamic>();
}
```
