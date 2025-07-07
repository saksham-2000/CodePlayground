export default function PreviewPane({html,css,js}) {
    const srcDoc = `<!doctype html><html><head><style>${css}</style></head><body>${html}<script>${js}<\\/script></body></html>`;
    return (
    <div className="h-[60vh] lg:h-full border rounded-2xl overflow-hidden">
    <iframe
    title="preview"
    className="w-full h-full bg-white"
    sandbox="allow-scripts allow-same-origin"
    srcDoc={srcDoc}
    />
    </div>
    );
    }