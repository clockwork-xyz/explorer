import type { NextPage } from "next";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import InstructionsForm from "components/common/Automation/InstructionsForm";
import SimulationLogs from "components/common/Automation/SimulationLogs";

const Automation: NextPage = () => {
  const { connected } = useWallet();
  const router = useRouter();

  if (!connected && typeof window !== "undefined") {
    router.push("/");
  }

  return (
    <>
      <div className="flex">
        <div className="w-6/12">
          <InstructionsForm />
        </div>
        <div className="w-6/12">
          <SimulationLogs />
        </div>
      </div>
    </>
  );
};

export default Automation;
