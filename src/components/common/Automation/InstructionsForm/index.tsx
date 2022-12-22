import React from "react";
import { TriggerOptionsData, InstructionOptionsData } from "../constants";
import { useState } from "react";
import TriggerOptions from "./TriggerOptions";
import ActionOptions from "./ActionOptions";
import TriggerForm from "./TriggerForm";
import { DefaultButton } from "components/common/Button/Default";

export default function InstructionsForm() {
  const [selectedTrigger, setSelectedTrigger] = useState(TriggerOptionsData[3]);
  const [selectedInstruction, setSelectedInstruction] = useState(
    InstructionOptionsData[3]
  );

  const [instructions, setInstructions] = useState([]);

  const handleAddMoreAction = () => {
    const instructionsCopy = [...instructions];
    instructionsCopy.push(selectedInstruction);

    setInstructions(instructionsCopy);
  };

  return (
    <div>
      <h2 className="mb-10">Trigger &amp; Actions</h2>
      <TriggerOptions
        selected={selectedTrigger}
        setSelected={setSelectedTrigger}
      />
      <TriggerForm trigger={selectedTrigger} />
      <ActionOptions
        selected={selectedInstruction}
        setSelected={setSelectedInstruction}
      />
      <DefaultButton onClick={handleAddMoreAction}>
        Add More Action
      </DefaultButton>
    </div>
  );
}
