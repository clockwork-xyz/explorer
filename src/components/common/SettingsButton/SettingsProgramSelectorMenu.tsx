import { FormEvent, useEffect, useState } from "react";
import { useClockworks } from "contexts/ClockworksContext";
import { CLOCKWORKS_PROGRAMS } from "anchor/addresses";

export const SettingsProgramSelectorMenu = () => {
  const { programID, setProgramID } = useClockworks();

  const [isChanging, setIsChanging] = useState(false);
  const [customProgramID, setCustomProgramID] = useState(programID.toString());

  const handleProgramChange = (e: FormEvent) => {
    e.preventDefault();
    setProgramID(customProgramID);
    setIsChanging(false);
  };

  useEffect(() => {
    setCustomProgramID(programID.toString());
  }, [programID, setCustomProgramID]);

  const selectProgram = (programID: string) => {
    setProgramID(programID);
    setIsChanging(false);
  };

  return (
    <div className="w-full px-8 py-4 bg-white dark:bg-[#2C2B2B] rounded-lg">
      <h2 className="text-lg dark:text-white font-medium mb-2.5">
        Program Address
      </h2>
      {!isChanging ? (
        <div className="flex items-center space-x-2.5">
          <p
            className="text-sm text-[#979797] dark:text-white font-normal"
            data-testid="selected-program-label"
          >
            {CLOCKWORKS_PROGRAMS[programID.toString()]
              ? CLOCKWORKS_PROGRAMS[programID.toString()]
              : `${programID.toString().slice(0, 18)}...`}
          </p>
          <button
            className="text-sm text-[#0E1114] dark:text-white font-semibold"
            onClick={() => setIsChanging(true)}
            data-cy="program-change-btn"
          >
            Change
          </button>
        </div>
      ) : (
        <form onSubmit={handleProgramChange} className="mt-2 space-y-4">
          <input
            type="text"
            value={customProgramID}
            onChange={(e) => setCustomProgramID(e.target.value)}
            placeholder="Thread Address"
            className="px-4 py-2 w-full text-sm font-mono text-[#0E1114] dark:text-white rounded-lg bg-transparent border border-[#BFBFBF
            ] dark:border-[#626262] focus:outline-none"
            data-testid="custom-program-input"
          />
          {Object.entries(CLOCKWORKS_PROGRAMS).map(
            ([programID, programLabel]) => (
              <div
                key={programID}
                className="bg-[#4F4C4C] dark:bg-[#393939] dark:hover:bg-[#4F4C4C] transition-colors py-3 px-4 rounded-lg flex flex-col cursor-pointer"
                onClick={() => selectProgram(programID)}
                data-testid={programLabel}
              >
                <p className="text-sm font-medium font-sans text-white dark:text-white">
                  {programLabel}
                </p>
                <p className="text-sm font-mono text-white dark:text-white font-light">
                  {programID}
                </p>
              </div>
            )
          )}
          <button
            type="submit"
            className="px-4 py-2 w-full text-black dark:text-white border border-[#0E1114] dark:border-white"
            data-cy="custom-program-confirm-btn"
          >
            Confirm
          </button>
        </form>
      )}
    </div>
  );
};
