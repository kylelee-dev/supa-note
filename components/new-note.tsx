"use client";

import { useState } from "react";

export default function NewNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSave = () => {};
  return (
    <div className="w-2/3 p-2 flex flex-col font-bold text-xl gap-2 items-center absolute top-0 right-0 bottom-0">
      <input
        type="text"
        placeholder="Enter the title."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full md:w-1/2 p-2 border-b border-gray-200"
      />
      <textarea
        className="w-full md:w-1/2 border border-gray-200 rounded-md text-xl p-2 grow "
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="w-full md:w-1/2 flex justify-end">
        <button
          className=" py-1 px-3 border-2 rounded-full border-green-600 hover:bg-green-200 transition-all duration-300 ease-in-out"
          onClick={() => onSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
