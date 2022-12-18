import { useCallback, useEffect, useState } from "react";
import { AccountInfo, ConfirmedSignatureInfo, PublicKey } from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";
import { useThreadProgram } from "contexts/ClockworkProgramsContext";
import { Program } from "@project-serum/anchor";
import { tryIntoPubkey } from "@clockwork-xyz/sdk"

export type AddressSignaturesHookState = {
  data?:  ConfirmedSignatureInfo[],
  error?: Error;
  loading?: boolean;
};

export const useAddressSignatures = (address: string) => {
  const { connection } = useConnection();
  const program = useThreadProgram();

  const [addresssState, setAddressState] = useState<AddressSignaturesHookState>({
    data: undefined,
    error: undefined,
    loading: false,
  });

  const reset = useCallback(() => {
    setAddressState({
      data: undefined,
      error: undefined,
      loading: false,
    });
  }, []);

  const fetchAddressSignaturesCallback = useCallback(
    async (address: string, retry = 0) => {
      setAddressState((prev) => ({
        ...prev,
        data: undefined,
        loading: true,
        error: undefined,
      }));
      try {
        const publicKey = new PublicKey(address);
        const confirmedSignatureInfo = await program.provider.connection.getSignaturesForAddress(publicKey);
        if (confirmedSignatureInfo) {
          // const { account, accountType } = tryDecode(program, confirmedSignatureInfo.data);
          setAddressState((prev) => ({
            ...prev,
            data: confirmedSignatureInfo,
            error: undefined,
            loading: false,
          }));
        } else {
          setAddressState((prev) => ({
            ...prev,
            data: undefined,
            error: new Error("Account not found."),
            loading: false,
          }));
        }
      } catch (error) {
        console.error(error?.message);
        if (
          error?.message ===
          "Cannot read properties of undefined (reading '_bn')"
        ) {
          return setAddressState((prev) => ({
            ...prev,
            data: undefined,
            error: new Error("Invalid address."),
            loading: false,
          }));
        }

        if (error?.message) {
          return setAddressState((prev) => ({
            ...prev,
            data: undefined,
            error: error,
            loading: false,
          }));
        }

        setAddressState((prev) => ({
          ...prev,
          data: undefined,
          error: new Error("Unexpected error."),
          loading: false,
        }));
      }
    },
    [program]
  );

  useEffect(() => {
    if (program && address?.length > 0) {
      fetchAddressSignaturesCallback(address);
    }
  }, [program, address, fetchAddressSignaturesCallback]);

  useEffect(() => {
    if (address?.length === 0) {
      setAddressState((prev) => ({
        ...prev,
        data: undefined,
        error: undefined,
      }));
    }
  }, [address]);

  return { ...addresssState, refetch: fetchAddressSignaturesCallback, reset };
};
