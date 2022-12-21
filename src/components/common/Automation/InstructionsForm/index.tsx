import React from "react";
import { TriggerOptionsData, InstructionOptionsData } from "../constants";
import { useState } from "react";
import TriggerOptions from "./TriggerOptions";
import ActionOptions from "./ActionOptions";

export default function InstructionsForm() {
  const [selectedTrigger, setSelectedTrigger] = useState(TriggerOptionsData[3]);
  const [selectedInstruction, setSelectedInstruction] = useState(
    InstructionOptionsData[3]
  );

  return (
    <div>
      <h2 className="mb-10">Trigger &amp; Actions</h2>
      <TriggerOptions
        selected={selectedTrigger}
        setSelected={setSelectedTrigger}
      />
      <ActionOptions
        selected={selectedInstruction}
        setSelected={setSelectedInstruction}
      />
    </div>
  );
}
