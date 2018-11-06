---
title: Customer Orders Design Plan
---
# Customer Orders - Design Plan

Yellow 

## Page Load

> **Customer Selection** (`<asp:DropDownList>`)

```csharp
// SalesController class
[DataObjectMethod(DataObjectMethodType.Select)]
public List<KeyValueOption> ListCustomerNames()
```

![](./images/Query-First-Visit.png)


## Selecting a Customer

> **Customer Summary Info** (disabled textboxes)

```csharp
// SalesController class
public CustomerSummary GetCustomerSummary(string customerId)
```

> **Order History Filters** (`<asp:RadioButtonList>`)

```csharp
// SalesController class
[DataObjectMethod(DataObjectMethodType.Select)]
public List<KeyValueOption> GetOrderHistoryFilters()
```

> **Order History** (`<asp:GridView>`)

```csharp
// SalesController class
[DataObjectMethod(DataObjectMethodType.Select)]
public List<CustomerOrder> GetOrdersByCustomer(string customerId, string filter)
```

![](./images/Query-Selected-Company.png)

----

## Starting New/Existing Order

```csharp

```

![](./images/Query-Open-Order.png)

----

## Saving Order

```csharp

```

![](./images/Command-Save-Order.png)

----

## Placing Customer Order

