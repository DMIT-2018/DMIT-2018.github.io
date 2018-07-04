---
title: Bootstrap, HTML5 Form Tags, and ASP.Net Controls
---
# Bootstrap, HTML5 Form Tags, and ASP.Net Controls

[![Bootstrap](./bootstrap-solid.svg =50x50)](http://getbootstrap.com/about/#brand)

Bootstrap is a suite of CSS styles and Javascript components. It was [created by two developers at Twitter](http://getbootstrap.com/about/) who wanted to simplify and speed the design and development of responsive web pages. It is meant to be minimally obtrusive to the semantic markup of HTML while at the same time prescriptive of how to achieve an orderly and responsive layout of content. Bootstrap [requires jQuery](http://getbootstrap.com/getting-started/#whats-included) for its Javascript components.

Since Visual Studio 2013, Bootstrap has become an integral part of its web site and web project templates. As such, it is helpful to have at least a minimal understanding of how Bootstrap works and how to leverage and use it in creating ASP.Net web forms (particularly when it comes to supporting user input).

Much of what is needed to integrate with Bootstrap has already been placed within the Site.master master page in the starter templates that come with Visual Studio. Before you can make use of it in a clean way, however, you need to ramp up on the basics of Bootstrap and HTML5 forms and understand how ASP.Net controls render themselves in the browser.

## Bootstrap Ramp-up

While it takes some effort and time to get good at working with or customizing Bootstrap, it is however amazingly easy to [get started](http://getbootstrap.com/getting-started/#template) using it. Because Bootstrap comes with predefined styles and uses a fluid and responsive [grid system](http://getbootstrap.com/css/#grid), it is extremely flexible in supporting both complex and simple layouts while remaining responsive to various screen sizes and layouts (see the various [examples](http://getbootstrap.com/getting-started/#examples) of layouts).

In order to support the criteria of responsive design, and thus be flexible in rendering content in various screen dimensions, Bootstrap employs a grid-based system of rows and columns. In Bootstrap, rows group together columns, and the maximum number of columns in any row is twelve (extra columns simply "wrap" within the row).

## Bootstrap and HTML5 Forms

One of the places where using Bootstrap can become tricky to work with is in the area of [HTML forms](http://getbootstrap.com/css/#forms). Part of this has to do with the wide variety of ways designers may wish to organize forms, and other parts have to do with the problems of standardizing the appearance of form controls across modern browsers. Even the most [basic example](http://getbootstrap.com/css/#forms-example) of forms tends to require a notable amount of CSS classes and additional markup (such as `<div>` tags) in order to render. (One of the more troublesome form controls for rendering has historically been the `<select>` or drop-down control.)

Bootstrap [supports styles for all the common HTML5 controls](http://getbootstrap.com/css/#forms-controls), and for most controls you simply need to add `class="form-control"`. Bootstrap is also very friendly toward [the new HTML5 form features](http://diveintohtml5.info/forms.html), such as the use of the `placeholder` attribute and the additional input types of date, time, email, color, etc. (Look for more great information on HTML5 form goodies at [HTML5 Rocks](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms_in_HTML), the [HTML5 Doctor](http://html5doctor.com/html5-forms-introduction-and-new-attributes/), and [Dive into HTML5](http://www.html5rocks.com/en/tutorials/forms/html5forms/).)

Where the use of Bootstrap styles begins to get verbose is in the use of `<label>` tags for input and trying to design [inline](http://getbootstrap.com/css/#forms-inline) and [horizontal](http://getbootstrap.com/css/#forms-horizontal) forms. A lot of this has to do with the Boostrap setting `<input>`, `<textarea>` and `<select>` tags to a width of 100% by default — a necessary step to support responsive layouts.

Although the heavy use of styles and `<div>` blocks might appear to be a downside, the positive aspects include consistent cross-browser compatibility in rendering and the ability to resize according to the device's viewport (i.e.: responsive layout). Those have long been a difficult aspect of styling in all web environments. Add to this that Bootstrap features include support for [input groups](http://getbootstrap.com/components/#input-groups), button [addons](http://getbootstrap.com/components/#input-groups-buttons) and [dropdowns](http://getbootstrap.com/components/#input-groups-buttons-dropdowns), and [segmented](http://getbootstrap.com/components/#input-groups-buttons-segmented) buttons, as well as a host of other user-input goodies, and it becomes easy to see why Bootstrap is a very positive step forward in improving web design and usability.

## Bootstrap and the VS2013 Website Template

- main content placeholder inside a .container
- asp:content need .row and .col-md-12 (or other) for layout
- asp.net controls render like this:
  - asp:label needs associated control to be a label, otherwise its a span
    - you can add type= and placeholder= attributes on textbox controls to get HTML 5 input types
- Trickier controls:
  - Gridview - renders as table
  - Listview and repeater - more control with templates, but more markup too
  - checkboxlist and radiobuttonlist have labels, and may need a "div" to offset them/group them

## Unobtrusive CSS

- fieldset is a good idea (semantically, anyway), and might be a better replacement for div
  - fieldset needs legend to be "correct"
- minimize hard-coded Bootstrap css with a little JavaScript and the data- annotation in HTML5

---

## Cool Bootstrap Related Resources

Here are a few of the cool Bootstrap related resources I've run across.

- [50 Must-have Plug-ins fro Bootstrap](http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/) \- although a little old, it has many of the items listed below
- [Fuel UX](http://exacttarget.github.io/fuelux/) \- Many Bootstrap controls, including cool Date Pickers, Infinite Scrolling, Loaders, Pillbox, Schedulers, and Wizards
- [ClockPicker](http://weareoutman.github.io/clockpicker/) \- a cool Bootstrap extension for picking time, check out this ClockPicker demo:  

```js
$('.clockpicker').clockpicker({ donetext: 'Accept' });
```

- [Bootstrap Markdown](http://toopay.github.io/bootstrap-markdown/)
- [Bootstrap wysihtml5](http://jhollingworth.github.io/bootstrap-wysihtml5/)
