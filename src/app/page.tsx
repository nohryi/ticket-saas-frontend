/*
"use client";

import { useEffect, useState } from "react";
import { fetchTestData } from "../../utils/api";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchTestData().then(setMessage);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Backend says: {message}</h1>
    </div>
  );
}
*/
import ClientComponent from "@/app/components/ClientComponent";
import TicTacToe from "@/app/components/TicTacToe";

// ✅ Server-Side Rendering (SSR) Fetch
async function fetchMessageSSR() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/messages`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.message;
}

// ✅ Main Home Component (SSR)
export default async function Home() {
  const serverMessage = await fetchMessageSSR();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-4">
      <h1 className="text-2xl font-bold">This part is rendered on server</h1>
      <p className="text-lg text-red-600">{serverMessage}</p>
      <div className="border-t border-gray-300 w-full my-8"></div>
      <TicTacToe />
      <div className="border-t border-gray-300 w-full my-8"></div>
      <ClientComponent />
    </div>
  );
}
