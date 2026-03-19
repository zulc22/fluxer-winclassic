#!/usr/bin/env bun

import less from "less";
import { chdir } from "node:process";

var userstyle_signature = await Bun.file(
  "./src/userstyle_signature.txt",
).text();

chdir("src");
var compiled_css = (await less.render(await Bun.file("./theme.less").text()))
  .css;
chdir("..");

await Bun.write("theme.css", compiled_css);
await Bun.write(
  "theme.user.css",
  userstyle_signature +
    '@-moz-document domain("web.fluxer.app")' +
    `{${compiled_css}}`,
);

console.log("Wrote theme.css and theme.user.css.");
