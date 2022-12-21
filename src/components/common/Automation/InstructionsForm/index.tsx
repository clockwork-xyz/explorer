import React from "react";
import { TriggerOptionsData } from "../constants";
import { useState } from "react";
import TriggerOptions from "./TriggerOptions";

export default function InstructionsForm() {
  const [selected, setSelected] = useState(TriggerOptionsData[3]);

  return (
    <div>
      <h2 className="mb-10">Trigger &amp; Actions</h2>
      <TriggerOptions selected={selected} setSelected={setSelected} />
    </div>
  );
}
