"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { abi } from "../../abi";
import { config } from "../../wagmi";
import { Button } from "./Button";
import { Address } from "viem";

export function CreatePost() {
  const account = useAccount({ config });
  const { writeContract } = useWriteContract();
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS! as Address;
  const { data, refetch } = useReadContract({
    abi,
    address: contractAddress,
    functionName: "getCount",
    account: account.address,
    query: { enabled: false, initialData: 0x0 },
  });

  return (
    <>
      <div className="w-full flex flex-col space-y-6 items-start justify-center max-w-xl mx-auto py-10">
        <div className="w-full p-4 rounded-lg shadow flex flex-col space-y-2">
          <div className="text-lg font-medium text-stone-400">Why You Dey Vex!</div>
          <textarea className="w-full p-4 border-2 border-stone-200 text-lg text-stone-400 rounded-lg h-16 outline-none" placeholder="Enter your reason for vexxing..."></textarea>
          <button className="ml-auto w-fit bg-stone-600 px-6 py-3 rounded-lg text-md font-medium text-center text-stone-100">Post am</button>
        </div>
      </div>
    </>
  );
}
