import React from "react";

type Input = {
  label: string;
//   onChange?: any;
  value: number;
  placeholder?: string;
};

const Textbox = ({ label, value, placeholder }: Input) => {
  return (
    <main className="border border-[#E1E1E1] h-[107px] rounded-2xl">
      <div className="flex flex-col gap-2.5 p-3.5 items-start justify-start py-[10px] w-full">
        <label className="text-[16px] leading-[100%] font-bold" htmlFor="">
          {label}
        </label>
        <input
          type="text"
          value={value}
        //   onChange={onChange}
          placeholder={placeholder}
          className="border border-[#E1E1E1] rounded-lg h-[40px] w-full indent-1.5 outline-0"
        />
      </div>
    </main>
  );
};

export default Textbox;
