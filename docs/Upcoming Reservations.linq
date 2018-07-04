<Query Kind="Expression">
  <Connection>
    <ID>db681f81-d76e-40d8-ba6e-38f797e7b291</ID>
    <Persist>true</Persist>
    <Server>.</Server>
    <Database>eRestaurant</Database>
  </Connection>
</Query>

from data in Reservations
where data.ReservationStatus == 'B'
orderby data.ReservationDate
group data by new { data.ReservationDate.Month, data.ReservationDate.Day } into dailyReservation
select new
{
    Month = dailyReservation.Key.Month,
    Day = dailyReservation.Key.Day,
    Reservations =  from booking in dailyReservation
                    select new
                    {
                        Name = booking.CustomerName,
                        Time = booking.ReservationDate.TimeOfDay,
                        NumberInParty = booking.NumberInParty,
                        Phone = booking.ContactPhone,
                        Event = booking.SpecialEvents.Description
                    }
}



