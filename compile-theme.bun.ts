#!/usr/bin/env bun

import { $, ShellError } from "bun";
import { exit } from "process";

var userstyle_signature = await Bun.file("./src/userstyle_signature.txt").text();
// var compiled_css = await less.render(await Bun.file("./src/theme.crush.css").text());

try {
    await $`bunx lessc ./src/theme.less ./theme.css`;
} catch (e) {
    exit(1);
}
var compiled_css = await Bun.file("./theme.css").text();

await Bun.write("theme.user.css",
    `${userstyle_signature}@-moz-document domain("web.fluxer.app"){${compiled_css}}`
);

console.log("Wrote theme.css and theme.user.css.");
