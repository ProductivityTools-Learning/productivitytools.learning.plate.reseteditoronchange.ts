import React, { useEffect, useRef, useState } from "react";
import { Plate, useResetPlateEditor } from "@udecode/plate";
import { plainTextValue } from "./basic-editor/plainTextValue";

import { editableProps } from "./common/editableProps";
import { MyParagraphElement, MyValue } from "./typescript/plateTypes";

const ResetEditorOnValueChange = ({ value }: { value: MyValue }) => {
  const resetPlateEditor = useResetPlateEditor();
  const isFirst = useRef(true);
  console.log("useffect2");
  useEffect(() => {
    if (isFirst.current) {
      console.log("useffect1");
      isFirst.current = false;
      return;
    }

    resetPlateEditor();
  }, [value, resetPlateEditor]);

  return null;
};

const initialValue = (content: string) => [
  {
    type: "p",
    children: [
      {
        text: content,
      },
    ],
  } as MyParagraphElement,
];

function App() {
  const [debugValue, setDebugValue] = useState<MyValue>(initialValue("fdsa"));

  return (
    <div className="App">
      hello
      <div>
        Input which changes Plate2<input type="text" onChange={() => setDebugValue(initialValue("ddd"))}></input><br/><br/>
        Plate1 changes Plate2 on chnge<Plate<MyValue> editableProps={editableProps} initialValue={debugValue} onChange={setDebugValue} /><br/>
        Plae2: which is changed but also allows to write in it<Plate<MyValue> editableProps={{ ...editableProps }} value={debugValue}>
          <ResetEditorOnValueChange value={debugValue} />
        </Plate>
      </div>
    </div>
  );
}

export default App;
