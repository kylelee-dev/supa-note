"use client";

import { supabase } from "@/utils/supabase";
import { useState } from "react";

export default function NewNote({
  fetchNotes,
  setIsCreating,
  setActiveNoteId,
}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSave = async () => {
    if (!title || !content) {
      alert("Title and content are required.");
      return;
    }
    const { data, error } = await supabase
      .from("note")
      .insert({ title, content })
      .select();
    if (error) {
      alert(error.message);
    }
    await fetchNotes();
    setIsCreating(false);
    setActiveNoteId((data as any[])[0].id);
  };
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
