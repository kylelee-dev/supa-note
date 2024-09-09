"use client";

import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

export default function NoteViewer({ note, setActiveNoteId, fetchNotes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note?.title);
  const [content, setContent] = useState(note?.content);

  useEffect(() => {
    setTitle(note.title);
    setContent(note.content);
    setIsEditing(false);
  }, [note]);

  const onSave = async () => {
    const { data, error } = await supabase
      .from("note")
      .update({ title, content })
      .eq("id", note.id);

    if (error) {
      alert(error.message);
    }
    fetchNotes();
    setIsEditing(false);
  };
  const onDelete = async () => {
    const { data, error } = await supabase
      .from("note")
      .delete()
      .eq("id", note.id);
    if (error) {
      alert(error.message);
    }

    setActiveNoteId(null);
    fetchNotes();
    setIsEditing(false);
  };

  return (
    <div className="w-2/3 p-2 flex flex-col font-bold text-xl gap-2 absolute items-center top-0 right-0 bottom-0">
      {isEditing ? (
        <>
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
            <button
              className=" py-1 px-3 border-2 rounded-full border-green-600 hover:bg-green-200 transition-all duration-300 ease-in-out"
              onClick={() => onDelete()}
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <h1 className="w-full md:w-1/2 p-2 border-b border-gray-200 ">
            {title}
          </h1>
          <p className="w-full md:w-1/2 p-2 border mt-10 border-gray-200 grow">
            {content}
          </p>

          <div className="w-full md:w-1/2 flex justify-end">
            <button
              className=" py-1 px-3 border-2 rounded-full border-green-600 hover:bg-green-200 transition-all duration-300 ease-in-out"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}
