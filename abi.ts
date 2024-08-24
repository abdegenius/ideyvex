export const abi = [
  {
    inputs: [],
    name: "decCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "incCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_count",
        type: "uint8",
      },
    ],
    name: "setCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
