JS to HTML string builder

Use Js to generate html strings

Install:

`npm i @kleutzinger-forks/html-builder`

Usage:

`import {a,p,br,customTag} from '@kleutzinger-forks/html-builder'`

.

.

.

## Simple tags:

`p("Paragraph")` Outputs: `<p>Paragraph</p>`

## With attributes:

`a({href: "google.com", "Link")` Outputs: `<a href="google.com">Link</p>`

## Self closing tags:

`img({src: "localhost"}, "Text")` Outputs: `<img url="localhost" />`

## Custom Tags:

`customTag("pre", {zindex: "0"}, "Text")` Outputs: `<pre zindex="0">Text</pre>`

## Supported Tags

- style
- title
- a
- h1
- h2
- h3
- h4
- h5
- h6
- p
- b
- i
- q
- strong
- em
- pre
- code
- div
- span
- table
- thead
- tbody
- tfoot
- tr
- td
- th
- colgroup
- caption
- ul
- ol
- li
- dt
- dd
- details
- summary
- option
- select
- textarea
- optgroup
- button

### Self Closing Tags

- area
- base
- br
- col
- embed
- hr
- img
- input
- link
- meta
- param
- source
- track
- wbr
