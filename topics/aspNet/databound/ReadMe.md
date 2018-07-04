---
title: Databound Controls
---
# Databound Controls

ASP.NET provides developers with what are known as [**Databound Controls**](http://msdn.microsoft.com/en-us/library/vstudio/ms228214(v=vs.100).aspx). A Databound control is one that can be given a collection of data and then be told to render its content automatically by looping through the data to extract and generate the internal markup and other controls needed to show that data on the website. Common examples of Databound controls are the DropDownList, RadioButtonList, CheckBoxList, GridView, ListView, and Repeater.

Another important feature of DataBound controls is their built-in support for CRUD functionality. Another important feature is that they are built to work with [**DataSource controls**](http://msdn.microsoft.com/en-us/library/ms228214(v=vs.100).aspx) (although you can still write your own code-behind that manually sets the `DataSource` property and calls the `DataBind()`method, along with handling the various CRUD-based events of the control).

DataBound controls have many key properties and methods; at their heart are two central properties and one method:

- `DataSource` property - This can be assigned various kinds of collections, such as `List<T>`, `ICollection`, an array, etc.
- `DataSourceID` property - This is the ID of some **DataSource control** on the page that can be used as an "intermediary" for providing access to a collection of data along with built-in CRUD support.
- `DataBind()` method - Calling this method tells the control to begin "un-packing" the data that's available in its `DataSource` property (or through its `DataSourceID` proxy).

## ObjectDataSource Control

The [**ObjectDataSource**](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.objectdatasource(v=vs.100).aspx#introduction) control is designed to provide data to databound controls via some object, such as an instance of a BLL class. There are other DataSource controls (see [Data Source Controls Overview](http://msdn.microsoft.com/en-us/library/vstudio/ms227679(v=vs.100).aspx) for a list), but for our purposes the `ObjectDataSource` fits well with the Client-Server approach used in this course.

Setting up an ObjectDataSource control is fairly simple. Just choose Configure data source … from the control's smart tag and follow the steps in the wizard to identify your BLL class and the methods you want to use for CRUD functionality.

## DropDownList

A **DropDownList** control is used to render a collection of items as key/value pairs in `<option value="key">Text to display</option>` tags for an HTML `<select>` tag.

## GridView

A [**GridView**](http://msdn.microsoft.com/en-us/library/vstudio/2s019wc0(v=vs.100).aspx) control is used to render a collection of items as rows in an HTML `<table>` tag. A GridView supports *Read*, *Update* and *Delete* functionality, but not *Create* (Insert) functionality. The public properties of each object in the collection are show in individual columns by default, although you can control the rendering of each column through the use of its [TemplateField](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.templatefield(v=vs.100).aspx) template. For simple rendering, it's common to use a [BoundField](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.boundfield(v=vs.100).aspx) or other similar controls inside the GridView.

## DetailsView

A [**DetailsView**](https://msdn.microsoft.com/en-us/library/s3w1w7t4(v=vs.140).aspx) control is used to render a collection of items one-by-one with a "next" and "previous" link to navigate the collection. The DetailsView can support all of the *CRUD* operations. Typically, the DetailsView will be rendered as an HTML `<table>` with one row for each public property of the type of object in the collection. You can control the rendering of each property through the use of its [TemplateField](https://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.templatefield(v=vs.110).aspx) template. For simple rendering, it's common to use a [BoundField](https://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.boundfield(v=vs.110).aspx) or other similar controls inside the DetailsView.

## ListView

A [**ListView**](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.listview(v=vs.100).aspx#introduction) control is far more flexible than a GridView in rendering its collection of data, but with that flexibility comes more responsibility on the part of the developer to specify how that rendering should take place. A ListView supports *Create*, *Read*, *Update*, and *Delete* functionality, so it is in many respects an ideal data-bound control to use for many situations.

The ListView uses a set of templates to control the rendering of its collection of data. For details on each of the templates and links on how to use them, see the MSDN documentation on the [ListView Templates](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.listview(v=vs.100).aspx#templates).

## Repeater

A [**Repeater**](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.repeater(v=vs.100).aspx#introduction) control is a very basic control just for rendering data. It has no built-in support for *Create*, *Update* or *Delete* functionality. Like the ListView, it uses a set of templates to show items of data in its collection of data. For details on how to use its templates, see the MSDN documentation on the [Repeater Templates](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.repeater(v=vs.100).aspx#templates).
