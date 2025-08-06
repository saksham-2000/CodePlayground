import { RiResetRightFill } from "react-icons/ri";
import { MdFormatAlignLeft } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";
export default function Toolbar({
  onFormat,
  onReset,
  onRun,
  autoRun,
  setAutoRun,
  onDownload,
  editorTheme,
  setEditorTheme,
}) {
  return (
    <div className="flex items-center justify-between flex-1 p-1.5 my-2 mx-3 rounded-lg bg-neutral-50 dark:bg-neutral-800 shadow-sm border-gray-200">
      <div className="flex flex-1 justify-center py-0.5">
        {/* <button
          onClick={onRun}
          className="px-3 py-1.5 rounded-lg bg-brand text-white hover:bg-brand-dark transition"
        >
          ▶︎ Run
        </button> */}
      </div>

      {/* <div className="h-6 w-px bg-neutral-300 dark:bg-neutral-600" /> */}
      <div className="flex items-center gap-2">
        <button
          title="Reformat"
          onClick={onFormat}
          className="px-2 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 border dark:text-white transition hover:bg-neutral-200 dark:hover:bg-neutral-500"
        >
          <MdFormatAlignLeft />
        </button>

        <button
          title="Reset Code"
          onClick={onReset}
          className="px-2 py-1.5 transition rounded-lg bg-neutral-100 dark:bg-neutral-800 border dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-500"
        >
          <RiResetRightFill />
        </button>

        <button title="Download Zip"
          onClick={onDownload}
          className="px-2 py-1.5 transition rounded-lg bg-neutral-100 dark:bg-neutral-800 border dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-500"
        >
          <FaFileDownload/>
        </button>

        {/* Editor Theme LOV */}
        <div className="flex items-center gap-2 text-md px-2 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 border dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-500">
          <span className="text-neutral-600 dark:text-neutral-300"></span>
          <select
            value={editorTheme}
            onChange={(e) => setEditorTheme(e.target.value)}
            className="bg-transparent outline-none"
            title="Editor Theme"
          >
            <option value="vs">Light (vs)</option>
            <option value="vs-dark">Dark (vs-dark)</option>
            <option value="hc-black">High Contrast</option>
          </select>
        </div>
      </div>
    </div>
  );
}
