import Header from './components/Header';
import Toolbar from './components/Toolbar';
import EditorTabs from './components/EditorTabs';
import EditorPane from './components/EditorPane';
import PreviewPane from './components/PreviewPane';
import usePlayground from './hooks/usePlayground';
import { downloadZip } from './utils/download';

export default function App() {
  const {
    active, setActive,
    html, setHtml,
    css, setCss,
    js, setJs,
    autoRun, setAutoRun,
    runVersion, onRun,
    onFormat, onReset,
    srcDoc,
    editorTheme, setEditorTheme,
  } = usePlayground();

  const handleDownload = () => {
    downloadZip({ html, css, js });
  };

  return (
    <div className="h-screen flex flex-col">
      <Header />

      <main className="flex-1 grid grid-rows-[auto_auto_1fr] p-4 gap-4 bg-neutral-50 dark:bg-neutral-950">
        <div className="flex items-center justify-between">
          <EditorTabs active={active} onChange={setActive} />
          <Toolbar
            onFormat={onFormat}
            onReset={onReset}
            onRun={onRun}
            autoRun={autoRun}
            setAutoRun={setAutoRun}
            onDownload={handleDownload}
            editorTheme={editorTheme}
            setEditorTheme={setEditorTheme}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
          <div>
            {active === 'html' && <EditorPane language="html" value={html} onChange={setHtml} name="HTML" theme={editorTheme}/>}
            {active === 'css' && <EditorPane language="css" value={css} onChange={setCss} name="CSS" theme={editorTheme}/>}
            {active === 'javascript' && <EditorPane language="javascript" value={js} onChange={setJs} name="JS" theme={editorTheme}/>}
          </div>
          <PreviewPane html={html} css={css} js={js} />
        </div>
      </main>
    </div>
  );
}
