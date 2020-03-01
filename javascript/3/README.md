# About
Here I implemented the getPath() function that returns the unique selector of a DOM element.

# Description
To keep selectors unique I decided to use the :nth-child() elements' property, so the resulting selector has the form "body>:nth-child(a)>:nth-child(b)>...>:nth-child(n)".

# How to
Launch javascript-3.html file and call getPath(elem) / document.querySelectorAll(getPath(elem)) from the console.

# Notes
Selectors are not easy to read (practically impossible), but at least they're unique...