import JSZip from "jszip";
import { saveAs } from "file-saver";

export async function downloadZip({ html, css, js }) {
  const zip = new JSZip();

  // Add individual files
  zip.file("index.html", html || "");
  zip.file("style.css", css || "");
  zip.file("script.js", js || "");

  // Generate and trigger download
  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, "codeplayground.zip");
}
