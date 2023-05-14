import React, { useEffect, useRef, useState } from "react";
import { Plate, useResetPlateEditor } from "@udecode/plate";
import { MyValue } from "./typescript/plateTypes";

const ResetEditorOnValueChange = ({ value }: { value: MyValue }) => {
  const resetPlateEditor = useResetPlateEditor();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    resetPlateEditor();
  }, [value, resetPlateEditor]);

  return null;
};


function App() {
  return (
    <div className="App">
    hello
    </div>
  );
}

export default App;
