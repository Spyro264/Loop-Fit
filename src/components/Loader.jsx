import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="min-h-dvh flex justify-center items-center">
      <div className="loader-wrapper">
        <span className="loader-letter">G</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">e</span>
        <span className="loader-letter">r</span>
        <span className="loader-letter">a</span>
        <span className="loader-letter">t</span>
        <span className="loader-letter">i</span>
        <span className="loader-letter">n</span>
        <span className="loader-letter">R</span>
        <span className="loader-letter">o</span>
        <span className="loader-letter">u</span>
        <span className="loader-letter">t</span>
        <span className="loader-letter">e</span>
        <div className="loader-spinner" />
      </div>
    </div>
  );
};

export default Loader;
