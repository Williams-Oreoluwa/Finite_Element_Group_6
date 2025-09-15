'use client'

import Hero from "@/components/Hero";
// import { useRouter } from "next/navigation";


export default function Home() {
  // const router = useRouter()
  return (
    <main className={`flex flex-col gap-6`}>
      <Hero />
    </main>
  );
}
