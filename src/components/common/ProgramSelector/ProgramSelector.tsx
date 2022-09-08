import { FormEvent, useEffect, useState } from "react";
import { useClockworks } from "../../../contexts/ClockworksContext";
import { CLOCKWORKS_PROGRAMS } from "../../../utils/constants";

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
    <div className="w-full p-4 bg-[#2C2B2B] rounded-lg">
      <h2 className="text-md font-bold">Program Address</h2>
      {!isChanging ? (
        <div className="flex items-center space-x-4">
          <p className="text-sm">
            {CLOCKWORKS_PROGRAMS[programID.toString()]
              ? CLOCKWORKS_PROGRAMS[programID.toString()]
              : `${programID.toString().slice(0, 18)}...`}
          </p>
          <button
            className="text-sm underline"
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
            placeholder="Queue Address"
            className="px-4 py-2 w-full rounded-lg bg-transparent border-2 border-[#E7EAED] focus:outline-none"
          />
          {Object.entries(CLOCKWORKS_PROGRAMS).map(([programID, programLabel]) => (
            <div
              key={programID}
              className="bg-white hover:bg-[#E7EAED] transition-colors py-2 px-4 rounded-lg flex items-center justify-between cursor-pointer"
              onClick={() => setCustomProgramID(programID)}
            >
              <p className="text-sm text-[#0E1114] font-medium">{programLabel}</p>
              <p className="text-sm text-[#0E1114] font-light">{programID}</p>
            </div>
          ))}
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
