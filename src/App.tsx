import React, { useEffect, useRef, useState } from "react";
import { Plate, useResetPlateEditor } from "@udecode/plate";
import { plainTextValue } from "./basic-editor/plainTextValue";

import { editableProps } from "./common/editableProps";
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
  const [debugValue, setDebugValue] = useState<MyValue>(plainTextValue);

  return (
    <div className="App">
      hello
      <div>
        <Plate<MyValue> editableProps={editableProps} initialValue={debugValue} onChange={setDebugValue} />
        <Plate<MyValue> editableProps={{ readOnly: true, ...editableProps }} value={debugValue}>
          <ResetEditorOnValueChange value={debugValue} />
        </Plate>
      </div>
    </div>
  );
}

export default App;
