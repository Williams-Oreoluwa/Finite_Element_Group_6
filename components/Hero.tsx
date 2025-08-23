import React from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Button from "./Button";

type Router = {
  router: AppRouterInstance;
};

const Hero = ({ router }: Router) => {
  return (
    <main className="flex flex-col gap-6 items-center capitalize justify-center font-bold text-4xl min-h-screen">
      <h1>Finite element project for Group 6</h1>
      <Button label="Get Started" onClick={() => router.push("/solution")} />
    </main>
  );
};

export default Hero;
