import React from "react";

export default function Navbar({ data }) {
  return (
    <header className="flex justify-between items-center py-4 px-1.5 sticky top-0 bg-white z-10">
      <h1 className="text-3xl font-medium">{data}</h1>
    </header>
  );
}
