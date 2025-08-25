import React from "react";

type Button = {
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button = ({ label, onClick }: Button) => {
  return (
    <button
      onClick={onClick}
      className="text-md h-fit text-amber-50 text-[16px] rounded-2xl w-fit max-w-[292px] p-4 bg-[#000000] hover:scale-105 cursor-pointer"
    >
      {label}
    </button>
  );
};

export default Button;
