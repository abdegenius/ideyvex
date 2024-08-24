"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { abi } from "../../abi";
import { config } from "../../wagmi";
import { Address } from "viem";
import { createAvatar } from "@dicebear/core";
import { croodles } from "@dicebear/collection";
import Image from "next/image";
import Link from "next/link";
import { Post } from "./Post";

export function Posts() {
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
  const AVATAR = (address: any) => {
    const avatar = createAvatar(croodles, {
      seed: address,
    });
    const svg = avatar.toString();
    return svg;
  };

  return (
    <>
      <div className="w-full flex flex-col space-y-2 items-start justify-start max-w-xl mx-auto">
        <h1 className="text-lg font-medium italic text-stone-400">
          Some people don drop vex...
        </h1>
        <Post id={1} />
        <Post id={2} />
        <Post id={3} />
        <Post id={4} />
      </div>
    </>
  );
}
