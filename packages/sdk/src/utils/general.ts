import { format } from "date-fns";
import { PublicKey } from "@solana/web3.js";
import { ClusterType } from "./constants";

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export function getExplorerLink(txSig: string, cluster: ClusterType): string {
  return `https://explorer.solana.com/tx/${txSig}?cluster=${
    cluster === "mainnet-beta" ? null : cluster
  }`;
}

export function getExplorerAccountLink(
  account: PublicKey,
  cluster: ClusterType
): string {
  return `/address/${account.toString()}?cluster=${
    cluster === "mainnet-beta" ? "" : "?network=" + cluster
  }`;
}

export function getExplorerBlockLink(
  block: number,
  cluster: ClusterType,
  customUrl?: string
): string {
  const queryVar = getExplorerQueryVar(cluster, customUrl);
  return `https://explorer.solana.com/block/${block.toString()}${queryVar}`;
}

// get solana explorer query variables by cluster
export function getExplorerQueryVar(
  cluster: ClusterType,
  customUrl?: string
): string {
  if (cluster === "mainnet-beta") {
    return "";
  }
  if (cluster === "custom") {
    return `?cluster=custom&customUrl=${customUrl || "localhost:8899"}`;
  }

  return "?cluster=" + cluster;
}

export const formatTrigger = (trigger: any) => {
  if (trigger?.cron) {
    return `Cron: ${trigger.cron.schedule}`;
  }
  return "Instant";
};

export const formatExecCtx = (execContext: any) => {
  if (execContext?.cron) {
    return `Cron: ${formatUnix(execContext.cron.startedAt.toNumber())}`;
  }
  return "Instant";
};

export const formatUnix = (unix: number) => {
  return format(new Date(unix * 1000), "PPPppp");
};

export const tryIsBuffer = (value: any) => {
  try {
    return Buffer.isBuffer(value);
  } catch (error) {
    return false;
  }
};

export const tryIntoPubkey = (value: any) => {
  try {
    return new PublicKey(value);
  } catch (error) {
    return undefined;
  }
};

export const tryIsAccounts = (value: any) => {
  try {
    return new PublicKey(value).toBase58();
  } catch (error) {
    return false;
  }
};

export const shortenAddress = (account: string, index: number = 6) => {
  return `${account.slice(0, index)}...${account.slice(-index)}`;
};
