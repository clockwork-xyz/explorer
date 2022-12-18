export type WebhookProgram = {
  "version": "1.3.15",
  "name": "webhook_program",
  "instructions": [
    {
      "name": "adminConfigUpdate",
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
      "name": "adminFeeClaim",
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
          "name": "fee",
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
      "name": "apiNew",
      "accounts": [
        {
          "name": "ackAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "api",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "baseUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "feeClaim",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fee",
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "requestAck",
      "accounts": [
        {
          "name": "ackAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "caller",
          "isMut": true,
          "isSigner": false
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
          "name": "request",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
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
      "name": "requestNew",
      "accounts": [
        {
          "name": "api",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "caller",
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
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "request",
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
          "name": "id",
          "type": "string"
        },
        {
          "name": "method",
          "type": {
            "defined": "HttpMethod"
          }
        },
        {
          "name": "route",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "api",
      "docs": [
        "* Api"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ackAuthority",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "baseUrl",
            "type": "string"
          },
          {
            "name": "requestCount",
            "type": "u64"
          }
        ]
      }
    },
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
            "name": "requestFee",
            "type": "u64"
          },
          {
            "name": "timeoutThreshold",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fee",
      "docs": [
        "* Fee"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "adminBalance",
            "type": "u64"
          },
          {
            "name": "workerBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "request",
      "docs": [
        "* Request"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "api",
            "type": "publicKey"
          },
          {
            "name": "caller",
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          },
          {
            "name": "headers",
            "type": {
              "defined": "HashMap<String,String>"
            }
          },
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "method",
            "type": {
              "defined": "HttpMethod"
            }
          },
          {
            "name": "route",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          },
          {
            "name": "workers",
            "type": {
              "vec": "publicKey"
            }
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
            "name": "requestFee",
            "type": "u64"
          },
          {
            "name": "timeoutThreshold",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "HttpMethod",
      "docs": [
        "* HttpMethod"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Get"
          },
          {
            "name": "Post"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AdminAuthorityInvalid",
      "msg": "This instruction requires admin authority"
    },
    {
      "code": 6001,
      "name": "InvalidClaimAmount",
      "msg": "You cannot claim more than the collectable balance"
    },
    {
      "code": 6002,
      "name": "InvalidHttpMethod",
      "msg": "Http method is not recognized"
    },
    {
      "code": 6003,
      "name": "InvalidWorkers",
      "msg": "Invalid number of workers"
    }
  ]
};

export const IDL: WebhookProgram = {
  "version": "1.3.15",
  "name": "webhook_program",
  "instructions": [
    {
      "name": "adminConfigUpdate",
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
      "name": "adminFeeClaim",
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
          "name": "fee",
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
      "name": "apiNew",
      "accounts": [
        {
          "name": "ackAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "api",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "baseUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "feeClaim",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "payTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "fee",
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
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "requestAck",
      "accounts": [
        {
          "name": "ackAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "caller",
          "isMut": true,
          "isSigner": false
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
          "name": "request",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
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
      "name": "requestNew",
      "accounts": [
        {
          "name": "api",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "caller",
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
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "request",
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
          "name": "id",
          "type": "string"
        },
        {
          "name": "method",
          "type": {
            "defined": "HttpMethod"
          }
        },
        {
          "name": "route",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "api",
      "docs": [
        "* Api"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "ackAuthority",
            "type": "publicKey"
          },
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "baseUrl",
            "type": "string"
          },
          {
            "name": "requestCount",
            "type": "u64"
          }
        ]
      }
    },
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
            "name": "requestFee",
            "type": "u64"
          },
          {
            "name": "timeoutThreshold",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "fee",
      "docs": [
        "* Fee"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "adminBalance",
            "type": "u64"
          },
          {
            "name": "workerBalance",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "request",
      "docs": [
        "* Request"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "api",
            "type": "publicKey"
          },
          {
            "name": "caller",
            "type": "publicKey"
          },
          {
            "name": "createdAt",
            "type": "u64"
          },
          {
            "name": "feeAmount",
            "type": "u64"
          },
          {
            "name": "headers",
            "type": {
              "defined": "HashMap<String,String>"
            }
          },
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "method",
            "type": {
              "defined": "HttpMethod"
            }
          },
          {
            "name": "route",
            "type": "string"
          },
          {
            "name": "url",
            "type": "string"
          },
          {
            "name": "workers",
            "type": {
              "vec": "publicKey"
            }
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
            "name": "requestFee",
            "type": "u64"
          },
          {
            "name": "timeoutThreshold",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "HttpMethod",
      "docs": [
        "* HttpMethod"
      ],
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "Get"
          },
          {
            "name": "Post"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AdminAuthorityInvalid",
      "msg": "This instruction requires admin authority"
    },
    {
      "code": 6001,
      "name": "InvalidClaimAmount",
      "msg": "You cannot claim more than the collectable balance"
    },
    {
      "code": 6002,
      "name": "InvalidHttpMethod",
      "msg": "Http method is not recognized"
    },
    {
      "code": 6003,
      "name": "InvalidWorkers",
      "msg": "Invalid number of workers"
    }
  ]
};
