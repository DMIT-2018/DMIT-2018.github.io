(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{431:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linqpad-querying-reservations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linqpad-querying-reservations","aria-hidden":"true"}},[t._v("#")]),t._v(" LinqPad - Querying Reservations")]),t._v(" "),s("p",[t._v("In this sample, we try to get the Reservation information we need for a specific date (sorted).")]),t._v(" "),s("ul",[s("li",[t._v("LinqPad C# Program to pass in a Date and get the reservations for that date LinqPad Code")])]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("Main")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" date "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("DateTime")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token number"}},[t._v("2014")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("10")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("24")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  date"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Dump")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("ReservationsByTime")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("date"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("Dump")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("// Define other methods and classes here")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token keyword"}},[t._v("dynamic")]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("ReservationsByTime")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v(" date"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" data "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Reservations")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("where")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReservationDate"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Year "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" date"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Year\n          "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReservationDate"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Month "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" date"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Month\n          "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReservationDate"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Day "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" date"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Day\n          "),s("span",{attrs:{class:"token operator"}},[t._v("&&")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReservationStatus "),s("span",{attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'B'")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// Reservation.Booked")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// DTOs.ReservationSummary()")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          Name "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CustomerName"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Date "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReservationDate"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          NumberInParty "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NumberInParty"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Status "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ReservationStatus"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Event "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SpecialEvents"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Description"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          Contact "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ContactPhone\n"),s("span",{attrs:{class:"token comment"}},[t._v("// /*Just for curiosity's sake*/      , Tables = from seat in data.ReservationTables")]),t._v("\n"),s("span",{attrs:{class:"token comment"}},[t._v("//                                               select seat.Table.TableNumber")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" finalResult "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" item "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" result\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("group")]),t._v(" item by item"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Date"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TimeOfDay"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" finalResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token generic-method"}},[s("span",{attrs:{class:"token function"}},[t._v("ToList")]),s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{attrs:{class:"token keyword"}},[t._v("dynamic")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);