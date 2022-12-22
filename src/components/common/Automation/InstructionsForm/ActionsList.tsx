import { InstructionType } from ".";

type ActionsListPropType = {
  instructions: InstructionType[];
  setInstructions: (items: InstructionType[]) => void;
};

export default function ActionsList({
  instructions,
  setInstructions,
}: ActionsListPropType) {
  const handleRemoveAction = (actionIndex: number) => {
    const instructionsCopy = [...instructions];
    instructionsCopy.splice(actionIndex, 1);
    setInstructions(instructionsCopy);
  };

  return (
    <div>
      {instructions.map((action: InstructionType, index: number) => {
        return (
          <>
            <div className="flex justify-between items-center">
              <div>
                <span className="mr-1">Action Name:</span>
                {action.name}
              </div>
              <span
                className="cursor-pointer"
                onClick={() => handleRemoveAction(index)}
              >
                x
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
}
