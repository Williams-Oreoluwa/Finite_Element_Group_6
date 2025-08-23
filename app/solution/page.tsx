'use client'

import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";

const Solution = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col gap-6 font-bold  items-center justify-center min-h-screen text-4xl capitalize">
      <h2>Our solution appear here....</h2>
      <Button label="Back Home" onClick={() => router.push("/")} />
    </div>
  );
};

export default Solution;
