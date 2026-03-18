#!/usr/bin/env bun

import * as cssc from 'csscrush';

var userstyle_signature = await Bun.file("./src/userstyle_signature.txt").text();
var compiled_css = await cssc.file("./src/theme.crush.css");

await Bun.write("theme.css", compiled_css);
await Bun.write("theme.user.css",
    `${userstyle_signature}@-moz-document domain("web.fluxer.app"){${compiled_css}}`
);

console.log("Wrote to theme.css and theme.user.css.");
