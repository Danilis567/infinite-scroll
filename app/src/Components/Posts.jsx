import React from "react";

export default function Posts({ img, title }) {
  return (
    <div className="flex flex-col gap-2 mb-6" >
      <h1 className="text-2xl" >{title}</h1>
      <img className="rounded-md"  src={img} alt="" />
    </div>
  );
}
