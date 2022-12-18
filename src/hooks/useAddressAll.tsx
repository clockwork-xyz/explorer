import { useCallback, useEffect, useState } from "react";
import { AccountInfo, PublicKey } from "@solana/web3.js";
import { useConnection } from "@solana/wallet-adapter-react";
import { useClockworkPrograms } from "contexts/ClockworkProgramsContext";
import { Program } from "@project-serum/anchor";
import { ClockworkProgram, tryIntoPubkey } from "@clockwork-xyz/sdk";

export type AddressHookState = {
  data?: { accountInfo: AccountInfo<any>; account?: any; accountType: string };
  error?: Error;
  loading?: boolean;
};

export const tryDecode = (program: ClockworkProgram, data: any) => {
  try {
    // get all account types in selected program
    const accountTypes = Object.keys(program.account);
    // try to decode into one of the program accounts
    for (let index = 0; index < accountTypes.length; index++) {
      const accountType = accountTypes[index];
      try {
        const decoded = program.coder.accounts.decode(accountType, data!);
        return { account: decoded, accountType };
      } catch (error) {
        // this account type doesnt decode
      }
    }
    // doesn't match any idl account
    return { account: undefined, accountType: "Account" };
  } catch (error) {
    // unexpected error
    console.error(error);
  }
};

export const tryDecodeFromManyIdls = (
  programs: ClockworkProgram[],
  data: any
) => {
  for (let i = 0; i < programs.length; i++) {
    const clockworkProgram = programs[i];
    const decoded = tryDecode(clockworkProgram, data);

    if (decoded.account) {
      return decoded;
    }
  }
  // doesn't match any idl account
  return { account: undefined, accountType: "Account" };
};

export const useAddressAll = (address: string) => {
  const { connection } = useConnection();
  const programs = useClockworkPrograms();

  const [addresssState, setAddressState] = useState<AddressHookState>({
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

  const fetchAddressCallback = useCallback(
    async (address: string, retry = 0) => {
      setAddressState((prev) => ({
        ...prev,
        data: undefined,
        loading: true,
        error: undefined,
      }));
      try {
        const publicKey = new PublicKey(address);
        const accountInfo =
          await programs[0].provider.connection.getAccountInfo(publicKey);
        if (accountInfo) {
          const { account, accountType } = tryDecodeFromManyIdls(
            programs,
            accountInfo.data
          );
          setAddressState((prev) => ({
            ...prev,
            data: { accountInfo, account, accountType },
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
    [programs]
  );

  useEffect(() => {
    if (programs && address?.length > 0) {
      fetchAddressCallback(address);
    }
  }, [programs, address, fetchAddressCallback]);

  useEffect(() => {
    if (address?.length === 0) {
      setAddressState((prev) => ({
        ...prev,
        data: undefined,
        error: undefined,
      }));
    }
  }, [address]);

  return { ...addresssState, refetch: fetchAddressCallback, reset };
};
