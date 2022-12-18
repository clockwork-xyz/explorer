import { useState, ChangeEvent } from "react";
import { toast } from "react-toastify";
import * as anchor from "@project-serum/anchor";
import { useWallet } from "@solana/wallet-adapter-react";
import uuid from "short-uuid";

import { PrimaryButton } from "../Button";
import { Input } from "../Input";
import { CLOCKWORK_THREAD_PROGRAM_ID } from "@clockwork-xyz/sdk";
import { useAnchorProvider } from "contexts/AnchorProvider";
import {
  useHelloClockworkProgram,
  useThreadProgram,
} from "contexts/ClockworkProgramsContext";

const SEED_QUEUE = "thread";
export const HelloWorldThread = () => {
  const anchorProvider = useAnchorProvider();
  const threadProgram = useThreadProgram();
  const helloClockworkProgram = useHelloClockworkProgram();
  const { publicKey } = useWallet();

  const [queueMsg, setQueueMsg] = useState("Hello World!");

  const handleCreateQueue = async () => {
    if (!anchorProvider) return;
    if (!publicKey) {
      toast("Connect your wallet and try again!");
      return;
    }

    const threadName = uuid().new();
    const [pda] = await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(SEED_QUEUE, "utf-8"),
        publicKey.toBuffer(),
        Buffer.from(threadName, "utf-8"),
      ],
      CLOCKWORK_THREAD_PROGRAM_ID
    );

    const helloworldInstruction = await helloClockworkProgram.methods
      .helloWorld(queueMsg)
      .accounts({ helloThread: publicKey })
      .instruction();

    try {
      const thread_transaction = await threadProgram.methods
        .threadCreate(
          threadName,
          {
            programId: helloClockworkProgram.programId,
            accounts: [{ pubkey: pda, isSigner: true, isWritable: true }],
            data: helloworldInstruction.data,
          },
          {
            cron: {
              schedule: "*/10 * * * * * *",
              skippable: true,
            },
          }
        )
        .accounts({
          authority: publicKey,
          payer: publicKey,
          thread: pda,
          systemProgram: anchor.web3.SystemProgram.programId,
        })
        .rpc();

      toast(`A queue has been created with "${queueMsg}"`);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col mt-3">
      <label>Message</label>
      <Input
        className="mt-1 mb-5"
        placeholder="Queue message here"
        value={queueMsg}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setQueueMsg(e.target.value)
        }
        data-testid="queue-name-input"
      />
      <div className="flex justify-end pt-5">
        <PrimaryButton
          className="pt-3 pb-3"
          onClick={() => handleCreateQueue()}
          data-cy="create-thread-btn"
        >
          Create Thread
        </PrimaryButton>
      </div>
    </div>
  );
};
