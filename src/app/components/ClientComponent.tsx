"use client"; // ✅ This must be at the very top

import { useEffect, useState } from "react";

export default function ClientComponent() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/messages")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching data"));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">This is browser render</h2>
      <p className="text-lg text-blue-600">{message || "Loading..."}</p>
    </div>
  );
}
