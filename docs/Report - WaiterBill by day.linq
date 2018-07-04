<Query Kind="Expression">
  <Connection>
    <ID>db681f81-d76e-40d8-ba6e-38f797e7b291</ID>
    <Persist>true</Persist>
    <Server>.</Server>
    <Database>eRestaurant</Database>
  </Connection>
</Query>

// Create a report that will show all the waiter's bills, grouped by day. The report should include the waiter's full name, the total of the bill, the number of customers on the bill, and the contact name of the reservation party (where applicable).

from row in Bills
where row.BillDate.Month == 5
orderby row.BillDate, row.Waiter.LastName, row.Waiter.FirstName
select new //WaiterBill()
{
    BillDate = new DateTime(row.BillDate.Year, row.BillDate.Month, row.BillDate.Day),
    Name = row.Waiter.LastName + ", " + row.Waiter.FirstName,
    Total = row.BillItems.Sum(b=>b.Quantity * b.SalePrice),
    PartySize = row.NumberInParty,
    Contact = row.Reservation.CustomerName
}
