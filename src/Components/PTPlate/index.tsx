import React, { useEffect, useRef, useState } from "react";
import { Plate, useResetPlateEditor } from "@udecode/plate";

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

type Props<PTPlateProps> = {
  propValue: MyValue;
};

function PTPlate2<PTPlateProps>({ propValue }: Props<PTPlateProps>) {
  const [debugValue, setDebugValue] = useState<MyValue>(propValue);

  useEffect(() => {
    console.log("XXXXXXXXX")
    setDebugValue(propValue);
  }, [propValue]);

  return (
    <div className="plate">
      <br></br>Plate3 (component):<br></br>
      <Plate<MyValue> editableProps={{ placeholder: "Type…" }} value={debugValue}>
        <ResetEditorOnValueChange value={debugValue} />
      </Plate>
    </div>
  );
}

export default PTPlate2;
