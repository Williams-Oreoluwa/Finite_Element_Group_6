"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Textbox from "@/components/Textbox";
import { IoIosArrowBack } from "react-icons/io";

const Solution = () => {
  const router = useRouter();
  return (
    <div className="bg-white p-6 flex flex-col w-full gap-6 font-bold  items-center justify-center text-4xl capitalize">
      <div className="flex items-start w-full justify-start gap-3.5 max-w-[1280px]">
        <div className="flex flex-col w-full gap-10">
          <div className="flex items-start justify-start gap-2.5 text-[16px] text-[#2E2E2E]">
            <span className="cursor-pointer" onClick={() => router.push("/")}>
              <IoIosArrowBack size={20} />
            </span>
            <h3>Parameters</h3>
          </div>
          <div className="w-full text-[16px] flex flex-col items-center justify-center  gap-4">
            <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 w-full">
              <Textbox
                label="length"
                // onChange={() => console.log("")}
                value={2}
              />
              <Textbox
                label="Width"
                // onChange={() => console.log("")}
                value={2}
              />
              <Textbox
                label="Poison Ratio (v)"
                // onChange={() => console.log("")}
                value={2}
              />
              <Textbox
                label="Modulus of Elasticity (E)"
                // onChange={() => console.log("")}
                value={2}
              />
              <Textbox
                label="Moment of Inertia (I)"
                // onChange={() => console.log("")}
                value={2}
              />
            </div>
            <div className="border shadow w-full border-[#E1E1E1]  rounded-2xl">
              <div className="flex flex-col gap-6 p-6 lg:p-10 items-start justify-start w-full">
                <label
                  className="text-[16px] leading-[100%] font-bold"
                  htmlFor=""
                >
                  Preview
                </label>
                <textarea
                  value={"34"}
                  readOnly
                  className="border bg-[#f7f7f7]  border-[#E1E1E1] resize-none rounded-lg h-[200px]  w-full indent-1.5 outline-0"
                />
              </div>
            </div>
            <Button label="Calculate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
