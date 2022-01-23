JS to HTML string builder



Install:

``npm i @frango9000/html-builder``


Usage: 

``import {a,p,customTag} from '@frango9000/html-builder'``

.

.

.

``p("Paragraph")``

Produces: ``<p>Paragraph</p>``

``a({href: "google.com", "Link")``

Produces: ``<a href="google.com">Link</p>``

``customTag("pre", {zindex: "0", "Text")``

Produces: ``<pre zindex="0">Text</pre>``
