---
title: Assorted WebForm Topics
---
# General ASP.NET Topics

> *TBA*

## Validation Controls

> *TBA*

## Error Handling

An important element for user interface design in form-based applications is the handling of system errors when processing user input. Reporting that something went wrong in the processing of user input - be it due to invalid input from the user or processing errors on the part of the system iteself - is a critical part of the feedback that a user needs to see.

Error handling of problems that arise while processing user input is typically done through try/catch blocks. Because a try block can be followed by a series of catch blocks (each one catching a different kind of error), it's possible to deal with each type of error differently. When handling errors, it important to let the user know what (if anything) they can do to rectify the error.

Because error handling has to happen in several pages (every page that has user input), it can be challenging to create a consistent and maintainable approach. Fortunately, by using language features such as delegates alongside ASP.NET User Controls, it's possible (with a bit of planning) to create a re-usable and maintainable approach to giving useful feedback to the end-user. When combined with validation controls, it's possible to create an experience that is both pleasant and helpful at the same time.

## User Controls

> *TBA*

## Global Error Handling

> *TBA*

### 404 Pages

> *TBA*
