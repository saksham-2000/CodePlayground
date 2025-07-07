import { useState } from 'react';
import EditorPane from './components/EditorPane';
import EditorTabs, { TABS } from './components/EditorTabs';
import useLocalStorage from './hooks/useLocalStorage';
import { formatAll } from './utils/format';


const DEFAULTS = {
html: `<!doctype html>\n<html>\n <head>\n <meta charset="utf-8" />\n <title>Playground</title>\n </head>\n <body>\n <h1>Hello, Playground</h1>\n <button id="btn">Click me</button>\n </body>\n</html>`,
css: `body { font-family: system-ui, sans-serif; padding: 2rem; }\nh1 { font-size: 2rem; }`,
javascript: `document.getElementById('btn')?.addEventListener('click', () => {\n console.log('Button clicked!');\n});`,
};


export default function App() {
const [active, setActive] = useState('html');
const [html, setHtml] = useLocalStorage('cp:v1:html', DEFAULTS.html);
const [css, setCss] = useLocalStorage('cp:v1:css', DEFAULTS.css);
const [js, setJs] = useLocalStorage('cp:v1:js', DEFAULTS.javascript);


const handleFormat = async () => {
try {
const { html: h, css: c, js: j } = await formatAll({ html, css, js });
setHtml(h); setCss(c); setJs(j);
} catch (e) {
console.error('Format error', e);
}
};


return (
<div className="h-screen flex flex-col">

<header className="p-3 border-b flex items-center justify-between">
<h1 className="text-lg font-semibold">CodePlayground</h1>
<div className="flex gap-2">
<button onClick={handleFormat} className="px-3 py-1 rounded-lg bg-black text-white dark:bg-white dark:text-black">Format</button>
</div>
</header>


<main className="flex-1 grid grid-rows-[auto_1fr] p-3 gap-3">
<EditorTabs active={active} onChange={setActive} />


<div className="grid grid-cols-1 lg:grid-cols-2 gap-3 h-full">
<div className="h-[60vh] lg:h-full">
{active === 'html' && <EditorPane language="html" value={html} onChange={setHtml} name="HTML" />}
{active === 'css' && <EditorPane language="css" value={css} onChange={setCss} name="CSS" />}
{active === 'javascript' && <EditorPane language="javascript" value={js} onChange={setJs} name="JS" />}
</div>


<div className="h-[60vh] lg:h-full border rounded-2xl overflow-hidden">
<iframe
title="preview"
className="w-full h-full bg-white"
sandbox="allow-scripts allow-same-origin"
srcDoc={`<!doctype html><html><head><style>${css}</style></head><body>${html}<script>${js}<\\/script></body></html>`}
/>
</div>
</div>
</main>

</div>
);
}