export type NetworkProgram = {
  "version": "1.3.15",
  "name": "network_program",
  "instructions": [
    {
      "name": "configUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "settings",
          "type": {
            "defined": "ConfigSettings"
          }
        }
      ]
    },
    {
      "name": "delegationClaim",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "delegationCreate",
      "accounts": [
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "delegationDeposit",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authorityTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "delegationStake",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegationStake",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "workerStake",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "delegationWithdraw",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authorityTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "feeDistribute",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotEntry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "penaltyClaim",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penalty",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "poolCreate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "poolRotate",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "poolUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "settings",
          "type": {
            "defined": "PoolSettings"
          }
        }
      ]
    },
    {
      "name": "registryEpochCutover",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "registryEpochKickoff",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "registryNonceHash",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "registryUnlock",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "snapshotDelete",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotCreate",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotEntryCreate",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotEntryDelete",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotFrameCreate",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "workerStake",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotFrameDelete",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "unstakeCreate",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "delegation",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "unstake",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstakePreprocess",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "unstake",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "unstakeProcess",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorityTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "unstake",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "workerTokens",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "workerClaim",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "workerCreate",
      "accounts": [
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penalty",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signatory",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "workerTokens",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "workerFeesDistribute",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "workerDelegationsStake",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "workerUpdate",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "settings",
          "type": {
            "defined": "WorkerSettings"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "config",
      "docs": [
        "* Config"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "epochThread",
            "type": "publicKey"
          },
          {
            "name": "hasherThread",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "delegation",
      "docs": [
        "An account to manage a token holder's stake delegation with a particiular a worker."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The authority of this delegation account."
            ],
            "type": "publicKey"
          },
          {
            "name": "id",
            "docs": [
              "The id of this delegation (auto-incrementing integer relative to worker)"
            ],
            "type": "u64"
          },
          {
            "name": "stakeAmount",
            "docs": [
              "The number of delegated tokens currently locked with the worker."
            ],
            "type": "u64"
          },
          {
            "name": "worker",
            "docs": [
              "The worker to delegate stake to."
            ],
            "type": "publicKey"
          },
          {
            "name": "yieldBalance",
            "docs": [
              "The number of lamports claimable as yield by the authority."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fee",
      "docs": [
        "Escrows the lamport balance owed to a particular worker."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "distributableBalance",
            "docs": [
              "The number of lamports that are distributable for this epoch period."
            ],
            "type": "u64"
          },
          {
            "name": "worker",
            "docs": [
              "The worker who received the fees."
            ],
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "penalty",
      "docs": [
        "Escrows the lamport balance owed to a particular worker."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "worker",
            "docs": [
              "The worker who was penalized."
            ],
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "pool",
      "docs": [
        "* Pool"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "workers",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "registry",
      "docs": [
        "Registry"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "currentEpoch",
            "type": "u64"
          },
          {
            "name": "locked",
            "type": "bool"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "totalPools",
            "type": "u64"
          },
          {
            "name": "totalUnstakes",
            "type": "u64"
          },
          {
            "name": "totalWorkers",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "snapshotEntry",
      "docs": [
        "* SnapshotEntry"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegation",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "snapshotFrame",
            "type": "publicKey"
          },
          {
            "name": "stakeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "snapshotFrame",
      "docs": [
        "* SnapshotFrame"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "snapshot",
            "type": "publicKey"
          },
          {
            "name": "stakeAmount",
            "type": "u64"
          },
          {
            "name": "stakeOffset",
            "type": "u64"
          },
          {
            "name": "totalEntries",
            "type": "u64"
          },
          {
            "name": "worker",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "snapshot",
      "docs": [
        "Snapshot"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "totalFrames",
            "type": "u64"
          },
          {
            "name": "totalStake",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "unstake",
      "docs": [
        "Unstake"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "delegation",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "worker",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "worker",
      "docs": [
        "Worker"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The worker's authority (owner)."
            ],
            "type": "publicKey"
          },
          {
            "name": "commissionBalance",
            "docs": [
              "The number of lamports claimable by the authority as commission for running the worker."
            ],
            "type": "u64"
          },
          {
            "name": "commissionRate",
            "docs": [
              "Integer between 0 and 100 determining the percentage of fees worker will keep as commission."
            ],
            "type": "u64"
          },
          {
            "name": "id",
            "docs": [
              "The worker's id."
            ],
            "type": "u64"
          },
          {
            "name": "signatory",
            "docs": [
              "The worker's signatory address (used to sign txs)."
            ],
            "type": "publicKey"
          },
          {
            "name": "totalDelegations",
            "docs": [
              "The number delegations allocated to this worker."
            ],
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ConfigSettings",
      "docs": [
        "* ConfigSettings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "epochThread",
            "type": "publicKey"
          },
          {
            "name": "hasherThread",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "PoolSettings",
      "docs": [
        "* PoolSettings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "size",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WorkerSettings",
      "docs": [
        "WorkerSettings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "commissionRate",
            "type": "u64"
          },
          {
            "name": "signatory",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInPool",
      "msg": "The worker is already in the pool"
    },
    {
      "code": 6001,
      "name": "InvalidCommissionRate",
      "msg": "The commission rate must be an integer between 0 and 100"
    },
    {
      "code": 6002,
      "name": "InvalidUnstakeAmount",
      "msg": "You cannot request to unstake more tokens than are currently locked"
    },
    {
      "code": 6003,
      "name": "InsufficientPenaltyBalance",
      "msg": "The penalty account has an insufficient balance for this operation"
    },
    {
      "code": 6004,
      "name": "InvalidSignatory",
      "msg": "The authority address cannot be used as the worker signatory"
    },
    {
      "code": 6005,
      "name": "RegistryLocked",
      "msg": "The registry is locked and may not be updated right now"
    },
    {
      "code": 6006,
      "name": "PoolFull",
      "msg": "The worker cannot rotate into the pool right now"
    }
  ]
};

export const IDL: NetworkProgram = {
  "version": "1.3.15",
  "name": "network_program",
  "instructions": [
    {
      "name": "configUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "settings",
          "type": {
            "defined": "ConfigSettings"
          }
        }
      ]
    },
    {
      "name": "delegationClaim",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "delegationCreate",
      "accounts": [
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "delegationDeposit",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authorityTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "delegationStake",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegationStake",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "workerStake",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "delegationWithdraw",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authorityTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "delegationTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "feeDistribute",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotEntry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "penaltyClaim",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penalty",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "poolCreate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "poolRotate",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signatory",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "poolUpdate",
      "accounts": [
        {
          "name": "admin",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "settings",
          "type": {
            "defined": "PoolSettings"
          }
        }
      ]
    },
    {
      "name": "registryEpochCutover",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "registryEpochKickoff",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "registryNonceHash",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "registryUnlock",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "snapshotDelete",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotCreate",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotEntryCreate",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotEntryDelete",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotEntry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotFrameCreate",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "workerStake",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "snapshotFrameDelete",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "unstakeCreate",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "delegation",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "unstake",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstakePreprocess",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "unstake",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "unstakeProcess",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authorityTokens",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "delegation",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "unstake",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "workerTokens",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "workerClaim",
      "accounts": [
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "workerCreate",
      "accounts": [
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "penalty",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signatory",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "workerTokens",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "workerFeesDistribute",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "fee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshot",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "snapshotFrame",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "workerDelegationsStake",
      "accounts": [
        {
          "name": "config",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "registry",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "thread",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "worker",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [],
      "returns": {
        "defined": "ThreadResponse"
      }
    },
    {
      "name": "workerUpdate",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "worker",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "settings",
          "type": {
            "defined": "WorkerSettings"
          }
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "config",
      "docs": [
        "* Config"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "epochThread",
            "type": "publicKey"
          },
          {
            "name": "hasherThread",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "delegation",
      "docs": [
        "An account to manage a token holder's stake delegation with a particiular a worker."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The authority of this delegation account."
            ],
            "type": "publicKey"
          },
          {
            "name": "id",
            "docs": [
              "The id of this delegation (auto-incrementing integer relative to worker)"
            ],
            "type": "u64"
          },
          {
            "name": "stakeAmount",
            "docs": [
              "The number of delegated tokens currently locked with the worker."
            ],
            "type": "u64"
          },
          {
            "name": "worker",
            "docs": [
              "The worker to delegate stake to."
            ],
            "type": "publicKey"
          },
          {
            "name": "yieldBalance",
            "docs": [
              "The number of lamports claimable as yield by the authority."
            ],
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fee",
      "docs": [
        "Escrows the lamport balance owed to a particular worker."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "distributableBalance",
            "docs": [
              "The number of lamports that are distributable for this epoch period."
            ],
            "type": "u64"
          },
          {
            "name": "worker",
            "docs": [
              "The worker who received the fees."
            ],
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "penalty",
      "docs": [
        "Escrows the lamport balance owed to a particular worker."
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "worker",
            "docs": [
              "The worker who was penalized."
            ],
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "pool",
      "docs": [
        "* Pool"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "size",
            "type": "u64"
          },
          {
            "name": "workers",
            "type": {
              "vec": "publicKey"
            }
          }
        ]
      }
    },
    {
      "name": "registry",
      "docs": [
        "Registry"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "currentEpoch",
            "type": "u64"
          },
          {
            "name": "locked",
            "type": "bool"
          },
          {
            "name": "nonce",
            "type": "u64"
          },
          {
            "name": "totalPools",
            "type": "u64"
          },
          {
            "name": "totalUnstakes",
            "type": "u64"
          },
          {
            "name": "totalWorkers",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "snapshotEntry",
      "docs": [
        "* SnapshotEntry"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "delegation",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "snapshotFrame",
            "type": "publicKey"
          },
          {
            "name": "stakeAmount",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "snapshotFrame",
      "docs": [
        "* SnapshotFrame"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "snapshot",
            "type": "publicKey"
          },
          {
            "name": "stakeAmount",
            "type": "u64"
          },
          {
            "name": "stakeOffset",
            "type": "u64"
          },
          {
            "name": "totalEntries",
            "type": "u64"
          },
          {
            "name": "worker",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "snapshot",
      "docs": [
        "Snapshot"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "totalFrames",
            "type": "u64"
          },
          {
            "name": "totalStake",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "unstake",
      "docs": [
        "Unstake"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "delegation",
            "type": "publicKey"
          },
          {
            "name": "id",
            "type": "u64"
          },
          {
            "name": "worker",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "worker",
      "docs": [
        "Worker"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "The worker's authority (owner)."
            ],
            "type": "publicKey"
          },
          {
            "name": "commissionBalance",
            "docs": [
              "The number of lamports claimable by the authority as commission for running the worker."
            ],
            "type": "u64"
          },
          {
            "name": "commissionRate",
            "docs": [
              "Integer between 0 and 100 determining the percentage of fees worker will keep as commission."
            ],
            "type": "u64"
          },
          {
            "name": "id",
            "docs": [
              "The worker's id."
            ],
            "type": "u64"
          },
          {
            "name": "signatory",
            "docs": [
              "The worker's signatory address (used to sign txs)."
            ],
            "type": "publicKey"
          },
          {
            "name": "totalDelegations",
            "docs": [
              "The number delegations allocated to this worker."
            ],
            "type": "u64"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "ConfigSettings",
      "docs": [
        "* ConfigSettings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "epochThread",
            "type": "publicKey"
          },
          {
            "name": "hasherThread",
            "type": "publicKey"
          },
          {
            "name": "mint",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "PoolSettings",
      "docs": [
        "* PoolSettings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "size",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "WorkerSettings",
      "docs": [
        "WorkerSettings"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "commissionRate",
            "type": "u64"
          },
          {
            "name": "signatory",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AlreadyInPool",
      "msg": "The worker is already in the pool"
    },
    {
      "code": 6001,
      "name": "InvalidCommissionRate",
      "msg": "The commission rate must be an integer between 0 and 100"
    },
    {
      "code": 6002,
      "name": "InvalidUnstakeAmount",
      "msg": "You cannot request to unstake more tokens than are currently locked"
    },
    {
      "code": 6003,
      "name": "InsufficientPenaltyBalance",
      "msg": "The penalty account has an insufficient balance for this operation"
    },
    {
      "code": 6004,
      "name": "InvalidSignatory",
      "msg": "The authority address cannot be used as the worker signatory"
    },
    {
      "code": 6005,
      "name": "RegistryLocked",
      "msg": "The registry is locked and may not be updated right now"
    },
    {
      "code": 6006,
      "name": "PoolFull",
      "msg": "The worker cannot rotate into the pool right now"
    }
  ]
};
