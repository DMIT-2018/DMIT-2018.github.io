---
title: Repeater Overview
---
# Repeater Overview

A [**Repeater**](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.repeater(v=vs.100).aspx#introduction) control is a very basic control just for rendering data. It has no built-in support for *Create*, *Update* or *Delete* functionality. Like the ListView, it uses a set of templates to show items of data in its collection of data. For details on how to use its templates, see the MSDN documentation on the [Repeater Templates](http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.repeater(v=vs.100).aspx#templates).

## Templates

Since the Repeater is only about displaying data, the templates are also along those lines. There is an ItemTemplate and AlternatingItemTemplate, just like in the ListView. A SeparatorTemplate can be used to display content between rows of data. A HeaderTemplate and FooterTemplate can be used to display content above and below the set of data. Those header and footer templates can be useful if you wanted to use a `<table>`, for example.

```xml
<HeaderTemplate><table></HeaderTemplate>
<ItemTemplate>
    <tr>
        <td>Content here</td>
    </tr>
</ItemTemplate>
<FooterTemplate></table></FooterTemplate>
```

Header and Footer templates to render the open and closing tags for a table

## Binding Data

Data binding inside the templates can be done through `<%# Eval("*PropertyName*") %>` for one-way data binding, same as for the ListView (there is no need for two-way data binding, however). These bindings can be placed in attributes of other controls (such as the Text property of a TextBox control) or as "plain text" in the template. For the property name, you can also use the navigation proeprties and "drill-down" to other data - all you need to do is ensure that the data in the navigation property has been loaded before leaving the BLL.
