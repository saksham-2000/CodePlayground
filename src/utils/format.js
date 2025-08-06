import prettier from "prettier/standalone";
import * as parserHtml from "prettier/plugins/html";
import * as parserBabel from "prettier/plugins/babel";
import * as pluginEstree from "prettier/plugins/estree";
import * as parserPostcss from "prettier/plugins/postcss";

export async function formatHtml(src) {
    return prettier.format(src, {
      parser: "html",
      plugins: [parserHtml],
    });
  }
  
  export async function formatCss(src) {
    return prettier.format(src, {
      parser: "css",
      plugins: [parserPostcss],
    });
  }
  
  export async function formatJs(src) {
    return prettier.format(src, {
      parser: "babel",
      plugins: [parserBabel,pluginEstree],
    });
  }
  
  export async function formatAll(payload) {
    const [h, c, j] = await Promise.all([
      formatHtml(payload.html),
      formatCss(payload.css),
      formatJs(payload.js),
    ]);
    return { html: h, css: c, js: j };
  }
  