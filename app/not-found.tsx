import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center gap-6 h-[80vh] text-white">
      <h1 className="text-2xl md:text-3xl font-bold">404</h1>
      <div className="border-r h-12" />
      <h2>Page not found</h2>
    </div>
  );
}
