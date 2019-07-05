(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{182:function(t,s,a){t.exports=a.p+"assets/img/product-listing-by-category.c7247d7e.png"},183:function(t,s,a){t.exports=a.p+"assets/img/product-catalog-add-product.dedb887a.png"},406:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"cqrs-pocos-and-dtos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cqrs-pocos-and-dtos","aria-hidden":"true"}},[t._v("#")]),t._v(" CQRS, POCOs, and DTOs")]),t._v(" "),e("h2",{attrs:{id:"gross-over-simplification"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gross-over-simplification","aria-hidden":"true"}},[t._v("#")]),t._v(" Gross Over-Simplification")]),t._v(" "),e("p",[t._v("The presentation of CQRS in this overview is really a gross oversimplification of what CQRS is all about and how to achieve it.")]),t._v(" "),e("p",[t._v('"True" CQRS is often seen in the development of microservices or in applying a Domain Driven Design (DDD) approach to development. It\'s not uncommon to see CQRS used with some kind of message bus and dependency injection (DI) framework. As a result, full-scale CQRS would involve creating separate classes for Commands and Queries. In this course, the discussion around CQRS is limited to how CQRS thinking impacts the design of our DTOs and POCOs.')]),t._v(" "),e("p",[t._v('For a more "canonical" description, take a look at '),e("a",{attrs:{href:"http://martinfowler.com/bliki/CQRS.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Martin Fowler's article"),e("OutboundLink")],1),t._v(" on it dated July 14, 2011. Or, for a Microsoft take on it, look at their article on the "),e("a",{attrs:{href:"http://msdn.microsoft.com/en-us/library/jj554200.aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("CQRS Journey"),e("OutboundLink")],1),t._v(" in their Patterns & Practices section of MSDN. There's even a site with a multi-part tutorial on getting started with CQRS using ASP.Net MVC at "),e("a",{attrs:{href:"http://cqrs.nu/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CQRS.nu"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("Command-Query Responsibility Segregation (CQRS) was devised by Bertrand Meyer as part of his pioneering work on the Eiffel programming language. The core objective of CQRS is to clearly distinguish "),e("em",[t._v("commands")]),t._v(" (methods that change information, such as CREATE, UPDATE and DELETE) from "),e("em",[t._v("queries")]),t._v(" (methods that just return information to the end-user).")]),t._v(" "),e("h2",{attrs:{id:"let-the-front-end-drive-cqrs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let-the-front-end-drive-cqrs","aria-hidden":"true"}},[t._v("#")]),t._v(" Let the Front-End Drive CQRS")]),t._v(" "),e("p",[t._v("What is most significant about CQRS is that the "),e("em",[t._v("shape")]),t._v(" of information can be different depending on whether you need to modify the information or just read it. In other words, the details that are presented to the end-user (queried from the database) don't have to be the same details sent by the end-user when updating information (commands). As Martin Fowler states, At its heart is a simple notion that you can use a different model to update information than the model you use to read information. The differences can go further still, because the read and update models can also be different from the model as stored in the database.")]),t._v(" "),e("p",[t._v("This is best illustrated in an example. Imagine that you have a database table for products that you've modelled using the following entity class.")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("Product")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ProductID "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" Name "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" Description "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("decimal")]),t._v(" UnitPrice "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("decimal")]),t._v(" UnitCost "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" QuanityOnHand "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ReorderLevel "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{attrs:{class:"token comment"}},[t._v("// Navigation Properties")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" ICollection"),e("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Category"),e("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" Categories "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("When it comes to editing this information in a standard CRUD form (e.g.: Add Product form), the actual data needed might look slightly different to a product manager who has to fill out information for new products in the catalog.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(183),alt:"Add Product portion of Product Catalog"}})]),t._v(" "),e("p",[t._v('In this instance, the class needed to hold/represent the data for adding would be much simpler. Other information for the database might be filled in as part of normal business rules (e.g.: the default quantity on hand is zero, and the unit cost is null until the first order is placed with a supplier). Classes used for simple data-transfer are called DTOs (Data Transfer Objects). When those DTOs don\'t have any properties to reference other classes, they are commonly referred to as POCOs (Plain-Old CLR Objects) because the data types of their properties are the "primitive" ones built into the language.')]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("NewProduct")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" Name "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" Description "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("decimal")]),t._v(" EstimatedUnitPrice "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ReorderLevel "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("POCO Product class for use in adding new products")]),t._v(" "),e("p",[t._v("Now, contrast this further with a situation where we need to show a listing of products for a given category as requested by a visitor to the web site.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(182),alt:"Product Listing by Category"}})]),t._v(" "),e("p",[t._v("In this instance, our DTO or POCO class might look like this.")]),t._v(" "),e("div",{staticClass:"language-csharp extra-class"},[e("pre",{pre:!0,attrs:{class:"language-csharp"}},[e("code",[e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{attrs:{class:"token class-name"}},[t._v("ProductSummary")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ProductID "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" Name "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("string")]),t._v(" Description "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("decimal")]),t._v(" UnitPrice "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("get")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("POCO Product class for use in displaying products")]),t._v(" "),e("p",[t._v('Although this is a simple example, it illustrates the point that the information needed at the front-end of an application does not have to be structured the same as it does when it\'s being processed or stored at the back-end. From this, it can be easy to see that the ultimate factor determining the "shape" or structure of our data will be how it is going to be used on the front-end. When the usage (be it for command or query actions) of the data differs from the storage of the data, this is a candidate for creating a new DTO or POCO. A word of caution, however: Beware of class explosion, where you are tempted to create many classes with subtle but non-essential differences.')]),t._v(" "),e("h2",{attrs:{id:"from-models-to-cqrs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from-models-to-cqrs","aria-hidden":"true"}},[t._v("#")]),t._v(" From Models to CQRS")]),t._v(" "),e("p",[t._v("When the DTOs and POCOs are in place, the next step on applying CQRS happens at the layer handling requests for the system - typically the BLL. Methods for commands can be made distinct from methods for queries in different ways. Sometimes its by placing them in separate BLL classes, other times they can be placed in the same class, but made cleanly distinct as separate \"groups\" of methods in the class. In any case, it's important to make sure that commands don't return anything (other than, perhaps, a simple primary key) and that queries don't make changes to the database.")])])},[],!1,null,null,null);s.default=n.exports}}]);