import { FormEvent, useEffect, useState } from "react";
import { useClockworks } from "contexts/ClockworkProgramsContext";
import { CLOCKWORKS_PROGRAMS } from "@clockwork-xyz/sdk";

export const ProgramSelector = () => {
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

  return (
    <div className="w-full px-10 py-4 bg-[#2C2B2B] dark:bg-[#5A5A5A] rounded-lg">
      <h2 className="text-sm text-white font-medium mb-2.5">Program Address</h2>
      {!isChanging ? (
        <div className="flex items-center space-x-2.5">
          <p className="text-sm text-white font-normal">
            {CLOCKWORKS_PROGRAMS[programID.toString()]
              ? CLOCKWORKS_PROGRAMS[programID.toString()]
              : `${programID.toString().slice(0, 18)}...`}
          </p>
          <button
            className="text-sm text-white font-normal underline"
            onClick={() => setIsChanging(true)}
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
            className="px-4 py-2 w-full text-white rounded-lg bg-transparent border border-[#E7EAED] focus:outline-none"
          />
          {Object.entries(CLOCKWORKS_PROGRAMS).map(
            ([programID, programLabel]) => (
              <div
                key={programID}
                className="bg-[#4F4C4C] dark:bg-[#2C2B2B] transition-colors py-2 px-4 rounded-lg flex items-center justify-between cursor-pointer"
                onClick={() => setCustomProgramID(programID)}
              >
                <p className="text-sm text-white">{programLabel}</p>
                <p className="text-sm text-white font-light">{programID}</p>
              </div>
            )
          )}
          <button
            type="submit"
            className="px-4 py-2 w-full rounded-lg bg-white hover:bg-[#E7EAED] text-black"
          >
            Confirm
          </button>
        </form>
      )}
    </div>
  );
};
