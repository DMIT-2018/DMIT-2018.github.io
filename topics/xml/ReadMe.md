---
title: XML
---
# XML

XML is designed as a standard for data that can be read, processed and written to on different systems. Like HTML (HyperText Markup Language) XML is a tag-based language; it is not a programming language like VB.NET, C# or Java. HTML, or XHTML, as you have learned is about presentation; text is tagged so that its appearance on a web page has the desired look and feel. Some sample HTML code is shown below:

```html
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    <h1>Sample HTML Document</h1>
    <p>
      This is a basic paragraph with some words <strong>bolded</strong> or <u>underlined</u>.
    </p>
  </body>
</html>
```

XML is about data; it can be read by humans but it is meant to be read by computers. XML does not have any pre-defined tags (HTML has a set of pre-defined tags as outlined at W3C.org). Without pre-defined tags, what good is XML? First we need to address why XML came to be. In 1996 the W3C set out to define a standard for data. This standard was required because of problems of data transfer between two different systems. Some of the problems the new XML standard had to overcome were:

- Language Accessibility: The standard had to be read by different operating systems.
- Native Data Formats: The format for storing information on one system could be different on another system hence conversion errors.
- Lexical Ambiguity: A method was needed to correctly store data such as Boolean values and dates; date formatting is generally different in different cultural areas around the world.
- Data Integrity: Once data is stored in the XML file it must be valid data (recall that data stored in a database must also be valid data).
- Type Restrictions: What data types do we use? How can we represent data that contains other data? A common type system had to be in place.

The XML format is not only used for data that can be transferred between systems. The XML format is also used by many other applications. It is used in the following:

- MS Word and other word processors have the ability to save documents in XML format.
- Configuration files for web applications, such as web.config, and the web server's configuration file, machine.config, are written in the XML format

## Well-Formed Markup

As a tag-based markup language, there are minimum requirements for an XML file to be considered "well-formed". If these requirements are not met, then the file cannot be properly read as XML by computer programs. Not all tag-based languages have these rules. HTML, for example, can accomodate these rules, but they are not required in order for the HTML to be properly understood by browsers. The following are the characteristics that make up "well-formed" XML.

Case-Sensitive
  ~ All elements and attribute names and values are case-sensitive. For example, the following element has the open a closing tag spelled the same, including case: `<startDate>May 2, 2014</startDate>`. It would be invalid to have the opening tag as `startDate` and the closing tag as `StartDate`.

Single Root Element
  ~ In an XML file, there must be a single element (tag) as the root of the XML tree. All other elements must be nested inside the root element.

Closed Tags
  ~ All elements must be properly closed. This means every tag must either have a closing tag to go with the opening tag or be self-closing. For example, `<endDate />` is a self-closing tag, while `<startDate>May 2, 2014</startDate>` is an element with an open and closing tag.

Attributes Values
  ~ Element attributes must have values, and the values must be placed in quotes.

Stacking & Nesting
  ~ Tags in XML cannot "overlap" as they can in HTML. For example, in HTML, it's possible to have tags overlap like this: `<b><i>Bold and Italic</b></i>`. In XML, this would be considered invalid. XML tags must cleanly nest and stack, as in this sample.

```html
<section>
    <p>Properly nested <b><i>Bold and Italic</i></b>.</p>
</section>
```
