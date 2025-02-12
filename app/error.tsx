"use client";

import React from "react";

interface ErrorProps {
  error: Error & {
    message?: string;
  };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="h-[80vw] flex flex-col items-center justify-center gap-4">
      <p className="font-bold text-2xl text-white">{error.message}</p>
      <button
        onClick={reset}
        className="bg-white text-green-800 py-2 px-5 rounded-md font-medium"
      >
        Go home
      </button>
    </div>
  );
}
