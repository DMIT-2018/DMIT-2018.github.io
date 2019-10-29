---
title: OLTP Planning
---
# OLTP Planning Exercise (3 Marks)

- [ ] Redo for a UI/Development Planning exercise

## Private GitHub Repo Only

Be aware that this is the continuation of the GroceryList exercises - you must be prepared to complete each exercise in light of the possibility that any given exercise may depend on the **correct** implementation of previous exercises. Place this work in your classroom private Exercise repository.

### Setup

No additional resources have been supplied.

### GroceryList ERD

![GroceryList ERD](./oltp/grocerylist_erd.png)

### Scenario

A customer has entered their order via the internet into our system. The order details contain quantity desired and a comment (such as weight or size). On the day the order is to be picked, a picking sheet has been printed. At the top of the sheet is the order number, customer name and contact phone number. The name and phone number have been supplied so the picker could contact the customer while picking the order for item clarification or any other reason (daily special, manager special, etc.). The picker takes the picking sheet and proceeds to gather the order. As the picker gathers the order, the picker records on the sheet quantity picked and any picking issue. The picker then takes the groceries to a holding area and returns the picking sheet to the office for entry by a clerk. 

The clerk will obtain a display of the picking sheet on their screen. The clerk enters all the picking information and then saves the display as a single transaction.

### Web page

Design a new web page that will record the picking of the customer order based on the requirements below. The form will collect the picker id and picking list information. The entire form will be processed as a single transaction.

### UX Interface Tasks

Create a design document, using the template supplied by your instructor, to implement the following user interface for your form. 

Picker id would normally be obtainted from the user login via security coding. This exercise does not have security coding so obtain the picker id from a drop down list. 

The clerk will be recording the data from a picking sheet, returned by the picker after the picker has done the customer shopping. The clerk will need to fetch the customer order currently on the database. The picking sheet will have the order number printed on the top. Show the customer name and contact phone number which is also at the top of the picking sheet.

The current customer order will be list the product description, ordered quantity, customer order comment along with an area to enter the actual quantity picked and any picking issue. A picking issue could be something such as "Out of Stock" which would results in a picked qty of 0 (zero).

