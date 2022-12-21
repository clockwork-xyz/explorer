export type TriggerOptionType = {
  id: number;
  name: string;
};

export const TriggerOptionsData: TriggerOptionType[] = [
  {
    id: 1,
    name: "On-Demand",
  },
  {
    id: 2,
    name: "Cron",
  },
  {
    id: 3,
    name: "Account",
  },
  {
    id: 4,
    name: "Pyth feed",
  },
  {
    id: 5,
    name: "Switchboard feed",
  },
  {
    id: 6,
    name: "Clockwork feed",
  },
];

export const TriggerNames = {
  ON_DEMAND: 1,
  CRON: 2,
  ACCOUNT: 3,
  PYTH_FEED: 4,
  SWITCHBOARD_FEED: 5,
  CLOCKWORK_FEED: 6,
};

export const InstructionOptionsData = [
  { id: 1, name: "Require (eq, gt, gte, lt, lte)" },
  { id: 2, name: "Token transfer" },
  { id: 3, name: "Token mint" },
  { id: 4, name: "Serum swap" },
  { id: 5, name: "Orca swap" },
  { id: 6, name: "Solend borrow" },
  { id: 7, name: "Solend repay" },
  { id: 8, name: "Solend deposit" },
  { id: 9, name: "Solend withdraw" },
  { id: 10, name: "Squad vote" },
  { id: 11, name: "Squad execute" },
  { id: 12, name: "Memo" },
  { id: 13, name: "Stake SOL" },
  { id: 14, name: "Claim yield" },
  { id: 15, name: "Metaplex mint" },
  { id: 16, name: "MagicEden list" },
  { id: 17, name: "MagicEden bid" },
  { id: 18, name: "MagicEden buy" },
  { id: 19, name: "Dialect send notification" },
  { id: 20, name: "Notifi send notification" },
];
