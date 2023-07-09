import React, { useState, useEffect } from "react";
import "./code.css";
import img1 from "./images/html.png";
import img2 from "./images/CSS.png";
import img3 from "./images/js.png";

function CodeEditor() {
  const [htmlCode, setHtmlCode] = useState(
    localStorage.getItem("html_code") || ""
  );
  const [cssCode, setCssCode] = useState(
    localStorage.getItem("css_code") || ""
  );
  const [jsCode, setJsCode] = useState(localStorage.getItem("js_code") || "");

  useEffect(() => {
    localStorage.setItem("html_code", htmlCode);
    localStorage.setItem("css_code", cssCode);
    localStorage.setItem("js_code", jsCode);
    updateIframe();
  }, [htmlCode, cssCode, jsCode]);

  function updateIframe() {
    const iframe = document.getElementById("result");
    iframe.contentDocument.body.innerHTML =
      `<style>${cssCode}</style>` + htmlCode;
    iframe.contentWindow.eval(jsCode);
  }

  return (
    <div className="stud">
      <div className="code-editor">
        <div className="code">
          <div className="html-code">
            <h1 className="text-white">
              <img src={img1} /> HTML
            </h1>
            <textarea
              value={htmlCode}
              onChange={(e) => setHtmlCode(e.target.value)}
              spellCheck={false}
            />
          </div>
          <div className="css-code">
            <h1 className="text-white">
              <img src={img2} />
              CSS
            </h1>
            <textarea
              value={cssCode}
              onChange={(e) => setCssCode(e.target.value)}
              spellCheck={false}
            />
          </div>
          <div className="js-code">
            <h1 className="text-white">
              <img src={img3} />
              JAVASCRIPT
            </h1>
            <textarea
              value={jsCode}
              onChange={(e) => setJsCode(e.target.value)}
              spellCheck={false}
            />
          </div>
        </div>
        <iframe id="result" />
      </div>
    </div>
  );
}

export default CodeEditor;
