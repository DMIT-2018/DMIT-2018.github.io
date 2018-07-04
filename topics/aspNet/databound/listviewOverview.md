---
title: ListView Overview
---
# ListView Overview

A [**ListView**](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.listview(v=vs.100).aspx#introduction) control provides a high flexiblity in rendering its collection of data, but with that flexibility comes more responsibility on the part of the developer to specify how that rendering should take place. A ListView supports *Create*, *Read*, *Update*, and *Delete* functionality, so it is in many respects an ideal data-bound control to use for many situations.

## Templates

The ListView uses a set of templates to control the rendering of its collection of data. For details on each of the templates and links on how to use them, see the MSDN documentation on the [ListView Templates](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.listview(v=vs.100).aspx#templates).

At a minimum, the ListView requires a LayoutTemplate and an ItemTemplate in order to display data. The ItemTemplate can be used in conjuncture with the AlternatingItemTemplate as a means of showing alternating rows of data slightly differently. Additionally, the SelectedItemTemplate can be used if you want to present a selected row of data differently from other rows. ItemSeparatorTemplate allows you to render specific content to separate the rows of data. The EmptyDataTemplate holds whatever you want to display if there is no data in the collection bound to the ListView.

InsertItemTemplate and EditItemTemplate are used to - you guessed it - insert and update rows of data. Typically, a Delete button would appear on the ItemTemplate, but there is no restriction requiring that. You could, for instance, only show that button on the SelectedItemTemplate. It's all up to you.

With all this talk of "rows" of data, that doesn't mean that the information has to be displayed in a tabluar fashion. Pretty much any valid HTML representation of the data is allowed - bulleted lists, free-flow text, columns, repeating columns, acordian, etc. A GroupTemplate and a GroupSeparatorTemplate can help with repeating columns or groups.

## Binding Data

Data binding inside the templates can be done through `<%# Eval("*PropertyName*") %>` for one-way data binding and `<%# Bind("*PropertyName*") %>` for two-way data binding. These bindings can be placed in attributes of other controls (such as the Text property of a TextBox control) or as "plain text" in the template. For the property name, you can also use the navigation proeprties and "drill-down" to other data - all you need to do is ensure that the data in the navigation property has been loaded before leaving the BLL.

## Command Buttons

Like the GridView control, buttons in the ListView can set their CommandName property set to various values to trigger automatic handlilng/processing through Data Source controls such as the ObjectDataSource. CommandName values can be (quoting from [MSDN documents](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.listview(v=vs.100).aspx#data_operations)):

> - **Cancel** \- Cancels an edit or insert operation. Raises the ItemCanceling event.
> - **Delete** \- Deletes the current record from the data source. Raises the ItemDeleted and ItemDeleting events.
> - **Select** \- Sets the SelectedIndex property to the DisplayIndex property value for the item. Renders the SelectedItemTemplate template for the item. Raises the SelectedIndexChanging and SelectedIndexChanged events.
> - **Edit** \- Puts the item in edit mode. Renders the EditItemTemplate template for the item. Raises the ItemEditing event.
> - **Insert** \- Inserts the bound values from the InsertItemTemplate template into the data source. Raises the ItemInserting and ItemInserted events.
> - **Update** \- Updates the current record in the data source with the bound values from the EditItemTemplate template. Raises the ItemUpdating and ItemUpdated events.
> - **Sort** \- Sorts the columns listed in the CommandArgument property of the button. Raises the Sorting and Sorted events.
