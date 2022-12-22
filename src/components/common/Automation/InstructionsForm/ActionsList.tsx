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
    setInstructions(instructionsCopy);
  };
  return (
    <div>
      {instructions.map((action: InstructionType, index) => {
        return (
          <>
            <div className="flex justify-center items-center">
              <div>
                <span className="mr-1">Action Name:</span>
                {action.name}
              </div>
              <span onClick={() => handleRemoveAction(index)}>x</span>
            </div>
          </>
        );
      })}
    </div>
  );
}
