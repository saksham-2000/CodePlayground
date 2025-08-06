import { useRef, useEffect } from 'react';
import Editor from '@monaco-editor/react';

export default function EditorPane({ language, value, onChange, name, theme }) {
  const valueRef = useRef(value);
  useEffect(() => { valueRef.current = value; }, [value]);

  const handleMount = (editor, monaco) => {
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: false },
      wordWrap: 'on',
      automaticLayout: true,
    });
    const model = editor.getModel();
    if (model) monaco.editor.setModelLanguage(model, language);
  };

  return (
    <div className="h-[75vh] lg:h-[80vh] w-full border rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 shadow-md">
      <Editor
        onMount={handleMount}
        value={value}
        onChange={(v) => onChange(v || '')}
        height="100%"
        defaultLanguage={language}
        theme={theme}
      />
      <span className="sr-only" aria-label={name || language} />
    </div>
  );
}
