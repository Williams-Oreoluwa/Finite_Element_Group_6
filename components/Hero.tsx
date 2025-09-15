import React from "react";
// import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Button from "./Button";
// import Link from "next/link";

// type Router = {
//   router: AppRouterInstance;
// };

interface Row {
  id: number;
  name: string;
}

interface UpdatedRow extends Row {
  matricNumber: number;
}

const data: UpdatedRow[] = [
  { id: 1, name: "Oreoluwa Williams", matricNumber: 444 },
  { id: 2, name: "Oreoluwa", matricNumber: 444 },
  { id: 3, name: "Victor", matricNumber: 444 },
];

const Hero = () => {
  return (
    <main className="p-10 flex  items-center capitalize justify-center font-bold text-4xl">
      <div className="max-w-[1280px] w-full text-center flex flex-col gap-y-6 items-center justify-center-safe">
        <h1 className="text-[24px]">Finite element project for Group 6</h1>
        <h2 className="text-[24px]">Lecturer : Dr Oyelade</h2>
        <h2 className="text-[24px]">Course Code : CEG 882</h2>
        <div className="flex flex-col gap-3 text-[14px] items-center justify-center p-4 lg:w-1/2 w-full overflow-x-auto">
          <h2 className="text-[24px]">Group Memebers</h2>
          <table className="table-auto max-w-[800px] border-collapse border-y-0 border-gray-300 w-full">
            <thead>
              <tr className="bg-[#F0F1F3]">
                <th className="border border-gray-300 px-4 py-2">ID</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Matric Number
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id}>
                  <td className="border border-gray-300 px-4 py-2">{row.id}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.matricNumber}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center gap-2.5 flex-wrap">
          {/* <Button
            label="Get Started"
            onClick={() => router.push("/solution")}
          /> */}
          <a
            href="/FEM_Task_30_Meshes(1).zip"
            download="FEM_Task_30_Meshes(1).zip"
          >
            <Button label="Download Code" />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Hero;
