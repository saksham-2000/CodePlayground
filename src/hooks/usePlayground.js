import { useState, useCallback,useMemo } from 'react';
import useLocalStorage from './useLocalStorage';
import { formatAll } from '../utils/format';


const DEFAULTS = {
html: `<!doctype html>\n<html>\n <head>\n <meta charset=\"utf-8\" />\n <title>Playground</title>\n </head>\n <body>\n <h1>Hello, Recruiter</h1>\n <button id=\"btn\">View Resume</button>\n </body>\n</html>`,
css: `body { font-family: system-ui, sans-serif; padding: 2rem; }\nh1 { font-size: 2rem; }`,
javascript: `document.getElementById('btn')?.addEventListener('click', () => {\n console.log('Button clicked!');\n});`,
};


export default function usePlayground() {
const [active, setActive] = useState('html');
const [html, setHtml] = useLocalStorage('key-cp:v1:html', DEFAULTS.html);
const [css, setCss] = useLocalStorage('key-cp:v1:css', DEFAULTS.css);
const [js, setJs] = useLocalStorage('key-cp:v1:js', DEFAULTS.javascript);


const onFormat = useCallback(async () => {
const out = await formatAll({ html, css, js });
setHtml(out.html); setCss(out.css); setJs(out.js);
}, [html, css, js, setHtml, setCss, setJs]);


const onReset = useCallback(() => {
setHtml(DEFAULTS.html); setCss(DEFAULTS.css); setJs(DEFAULTS.javascript);
}, [setHtml, setCss, setJs]);

const [editorTheme, setEditorTheme] = useLocalStorage(
    'cp:v1:editorTheme',
    'vs' // default theme
  );

// const srcDoc = useMemo(() => {
//     return buildSrcDoc(html, css, js);
//     // when manual, only recalc when runVersion changes
//   }, [html, css, js]);

return {
active, setActive,
html, setHtml,
css, setCss,
js, setJs,
onFormat,
onReset,
editorTheme, setEditorTheme
};
}