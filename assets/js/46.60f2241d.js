(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{348:function(t,a,s){t.exports=s.p+"assets/img/Webform_04.6daafc83.jpg"},349:function(t,a,s){t.exports=s.p+"assets/img/WebForm_03.4397d86e.jpg"},350:function(t,a,s){t.exports=s.p+"assets/img/WebForm_02.7b421a57.jpg"},351:function(t,a,s){t.exports=s.p+"assets/img/WebForm_01.71253d95.jpg"},352:function(t,a,s){t.exports=s.p+"assets/img/Wizard_06.cf8279a6.jpg"},353:function(t,a,s){t.exports=s.p+"assets/img/Wizard_05.0cc79d8a.jpg"},354:function(t,a,s){t.exports=s.p+"assets/img/Wizard_04.854d3439.jpg"},355:function(t,a,s){t.exports=s.p+"assets/img/Wizard_03.546a1312.jpg"},356:function(t,a,s){t.exports=s.p+"assets/img/Wizard_02.6dd76f55.jpg"},357:function(t,a,s){t.exports=s.p+"assets/img/Wizard_01.b11a3dcb.jpg"},507:function(t,a,s){"use strict";s.r(a);var e=s(22),n=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"erestaurant-reporting-basics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#erestaurant-reporting-basics","aria-hidden":"true"}},[t._v("#")]),t._v(" eRestaurant - Reporting Basics")]),t._v(" "),e("p",[t._v("You can add reports to your ASP.NET website using Microsoft's Report and ReportViewer. The data for a report can be supplied by any collection that supports iEnumerable, such as a List of Custom Business Objects ("),e("code",[t._v("List<T>")]),t._v("), a Typed DataSet, or a LINQ query.")]),t._v(" "),e("p",[t._v("The following steps demonstrate how to create a simple report based on a collection created by a Linq query within your Business Logic Layer (BLL) controller. The collection is defined by a POCO class called CategoryMenuItem. The data within this class is considered a flat data collection.")]),t._v(" "),e("h2",{attrs:{id:"building-the-backend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#building-the-backend","aria-hidden":"true"}},[t._v("#")]),t._v(" Building the BackEnd")]),t._v(" "),e("h3",{attrs:{id:"create-the-poco-collection-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-poco-collection-class","aria-hidden":"true"}},[t._v("#")]),t._v(" Create the POCO collection class")]),t._v(" "),e("p",[t._v("Add a new class to your POCOs folder called CategoryMenuItem.")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("namespace")]),t._v(" eRestaurantSystem"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("POCOs\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("CategoryMenuItems")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" CategoryDescription "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" ItemDescription "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("decimal")]),t._v(" Price "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("int")]),e("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" Calories "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" Comment "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"create-the-bll-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-bll-method","aria-hidden":"true"}},[t._v("#")]),t._v(" Create the BLL method")]),t._v(" "),e("p",[t._v("Create a new DataObjectMethod called GetReportCategoryMenuItems() within your BLL controller class. This method will select from the Items DbSet and use the POCO class CategoryMenuItem. Preordering of the data can be done at this time or deferred to when the report runs. Since the Linq command is eventually run within SQL, why not use the optimization power of the database management system to sort the data. Notice the use of POCOs when qualifying the datatype on select new. This is required because there is also a DTO class by the same name. Remember to place a Using statement with the rest of your namespaces.")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{attrs:{class:"token class-name"}},[t._v("DataObjectMethod")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("DataObjectMethodType"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Select"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("false")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" List"),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("POCOs"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CategoryMenuItems"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("GetReportCategoryMenuItems")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eRestaurantContext context "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token function"}},[t._v("eRestaurantContext")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" results "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" cat "),e("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" context"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token class-name"}},[t._v("Items")]),t._v("\n                        "),e("span",{attrs:{class:"token keyword"}},[t._v("orderby")]),t._v(" cat"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MenuCategory"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Description"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cat"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token class-name"}},[t._v("Description")]),t._v("\n                        "),e("span",{attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("POCOs"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CategoryMenuItems")]),t._v("\n                        "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            CategoryDescription "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cat"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MenuCategory"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Description"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            ItemDescription "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cat"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Description"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            Price "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cat"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CurrentPrice"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            Calories "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cat"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Calories"),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                            Comment "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" cat"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Comment\n                        "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),e("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" results"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token function"}},[t._v("ToList")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token comment"}},[t._v("// this was .Dump() in Linqpad")]),t._v("\n    "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"create-the-report"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-report","aria-hidden":"true"}},[t._v("#")]),t._v(" Create the Report")]),t._v(" "),e("p",[t._v("Create a new folder under the web site called Reports. All the report .rdlc files will be placed here. These files are an XML representation of the report definition.")]),t._v(" "),e("h3",{attrs:{id:"select-report-details-and-grouping"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select-report-details-and-grouping","aria-hidden":"true"}},[t._v("#")]),t._v(" Select Report Details and Grouping")]),t._v(" "),e("ol",[e("li",[t._v('Right-click on your website (or a folder of your website) and select "Add New Item…". Select the Report Wizard template and give it the name "CategoryMenuItems.rdlc". This will bring up the report wizard.')])]),t._v(" "),e("p",[e("img",{attrs:{src:s(357),alt:"Add New Item - Report Wizard"}})]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v('In the Dataset Propertied dialog, enter "CategoryMenuItemDS" as the Name. Select your BLL controller as the Data source. Select the GetReportCategoryMenuItems as the Available datasets. Then, click Next.')])]),t._v(" "),e("p",[e("img",{attrs:{src:s(356),alt:"Report Wizard - Dataset Properties"}})]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("In the Arrange fields, click on the item in Available Fields and drag it to either Row groups or Values as shown in the image. Values will create the Detail line of your report. The detail lines will be grouped under the Row group. Numerics are automatically assumed to be Sum(). To remove this Sum(), click on the down arrow and uncheck the Sum. Click Next.")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(355),alt:"Report Wizard - Arrange fields"}})]),t._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[t._v("In the Choose the layout, change from Blocked, subtotal below to Stepped, subtotal above. The Expand/collapse groups will allow for drill down of your display. Click Next.")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(354),alt:"Report Wizard - Choose the layout"}})]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Choose one of the default styles and click Next.")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(353),alt:"Report Wizard - Choose a style"}})]),t._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[t._v("You now have your basic report with no customization or formatting. In your Solution you have a new entry which is the .rdlc file. This is the XML representation of the report definition. Open it and view the code but do not touch.")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(352),alt:"Report (.rdlc)"}})]),t._v(" "),e("h3",{attrs:{id:"create-the-webform-with-a-reportviewer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-the-webform-with-a-reportviewer","aria-hidden":"true"}},[t._v("#")]),t._v(" Create the WebForm with a ReportViewer")]),t._v(" "),e("ul",[e("li",[t._v('Add a new Web Form to your web site demonstration page folder naming it "ReportCategoryMenuItems.aspx".\n'),e("ul",[e("li",[t._v("In our Visual Studio 2013 website template, the site.master will have the ScriptManager by default.")]),t._v(" "),e("li",[t._v("You can check your site.master for a ScriptManager object. If you do not have this object on the .aspx page, drag a ScriptManager from the AJAX Extensions (or ToolscriptManager) control onto your form.")])])])]),t._v(" "),e("p",[e("img",{attrs:{src:s(351),alt:"Screenshot"}})]),t._v(" "),e("ul",[e("li",[t._v('Next, drag and ObjectDataSource to your form, and give it the ID "ODSCategoryMenuItems". The click the object data source\'s smart tag and select "Configure Data Source…". Configure your data source to the GetReportCategoryMenuItems within the BLL controller.')])]),t._v(" "),e("p",[e("img",{attrs:{src:s(350),alt:"Screenshot"}})]),t._v(" "),e("ul",[e("li",[t._v('From the Reporting set of tools in the Toolbox, drag a ReportViewer onto your form. Set its Width property to "100%". Then, click the ReportViewer\'s smart tag and select "CategoryMenutIems.rdlc" in the Choose Report drop-down.')])]),t._v(" "),e("p",[e("img",{attrs:{src:s(349),alt:"Screenshot"}})]),t._v(" "),e("ul",[e("li",[t._v('Click the ReportViewer\'s smart tag once more and click on Choose Data Sources. Select the "ODSCategoryMenuItems" as the Data Source Instance and click OK.')])]),t._v(" "),e("p",[e("img",{attrs:{src:s(348),alt:"Screenshot"}})]),t._v(" "),e("ul",[e("li",[t._v("Save the form, and then view it in the Browser. You should get a form that looks like the following.")])]),t._v(" "),e("p",[e("img",{attrs:{src:"WebForm_05.jpg",alt:"Screenshot"}})])])},[],!1,null,null,null);a.default=n.exports}}]);