export type HelloClockwork = {
  "version": "0.1.0",
  "name": "hello_clockwork",
  "instructions": [
    {
      "name": "helloWorld",
      "accounts": [
        {
          "name": "helloQueue",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "returns": {
        "defined": "clockwork_sdk::CrankResponse"
      }
    }
  ]
};

export const IDL: HelloClockwork = {
  "version": "0.1.0",
  "name": "hello_clockwork",
  "instructions": [
    {
      "name": "helloWorld",
      "accounts": [
        {
          "name": "helloQueue",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        }
      ],
      "returns": {
        "defined": "clockwork_sdk::CrankResponse"
      }
    }
  ]
};
