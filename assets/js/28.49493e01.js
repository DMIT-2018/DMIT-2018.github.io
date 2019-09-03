(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{489:function(t,a,e){"use strict";e.r(a);var s=e(22),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"repeater-overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repeater-overview","aria-hidden":"true"}},[t._v("#")]),t._v(" Repeater Overview")]),t._v(" "),e("p",[t._v("A "),e("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.repeater(v=vs.100).aspx#introduction",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[t._v("Repeater")]),e("OutboundLink")],1),t._v(" control is a very basic control just for rendering data. It has no built-in support for "),e("em",[t._v("Create")]),t._v(", "),e("em",[t._v("Update")]),t._v(" or "),e("em",[t._v("Delete")]),t._v(" functionality. Like the ListView, it uses a set of templates to show items of data in its collection of data. For details on how to use its templates, see the MSDN documentation on the "),e("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/vstudio/system.web.ui.webcontrols.repeater(v=vs.100).aspx#templates",target:"_blank",rel:"noopener noreferrer"}},[t._v("Repeater Templates"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"templates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#templates","aria-hidden":"true"}},[t._v("#")]),t._v(" Templates")]),t._v(" "),e("p",[t._v("Since the Repeater is only about displaying data, the templates are also along those lines. There is an ItemTemplate and AlternatingItemTemplate, just like in the ListView. A SeparatorTemplate can be used to display content between rows of data. A HeaderTemplate and FooterTemplate can be used to display content above and below the set of data. Those header and footer templates can be useful if you wanted to use a "),e("code",[t._v("<table>")]),t._v(", for example.")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("HeaderTemplate")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("HeaderTemplate")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ItemTemplate")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Content here"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ItemTemplate")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FooterTemplate")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token tag"}},[e("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("FooterTemplate")]),e("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Header and Footer templates to render the open and closing tags for a table")]),t._v(" "),e("h2",{attrs:{id:"binding-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-data","aria-hidden":"true"}},[t._v("#")]),t._v(" Binding Data")]),t._v(" "),e("p",[t._v("Data binding inside the templates can be done through "),e("code",[t._v('<%# Eval("*PropertyName*") %>')]),t._v(' for one-way data binding, same as for the ListView (there is no need for two-way data binding, however). These bindings can be placed in attributes of other controls (such as the Text property of a TextBox control) or as "plain text" in the template. For the property name, you can also use the navigation proeprties and "drill-down" to other data - all you need to do is ensure that the data in the navigation property has been loaded before leaving the BLL.')])])},[],!1,null,null,null);a.default=n.exports}}]);