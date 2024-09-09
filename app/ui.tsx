"use client";

import EmptyNote from "@/components/empty-note";
import Header from "@/components/header";
import NewNote from "@/components/new-note";
import NoteViewer from "@/components/note-viewer";
import Sidebar from "@/components/sidebar";
import { Database } from "@/types_db";
import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

export default function UI() {

  const [notes, setNotes] = useState<
    Database["public"]["Tables"]["note"]["Row"][]
  >([]);
  const fetchNotes = async () => {
    const { data, error } = await supabase.from("note").select("*").ilike("title", `%${search}%`);

    if (error) {
        alert(error.message);
        return;
    } 
    setNotes(data);
  };
  const [search, setSearch] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  const [activeNoteId, setActiveNoteId] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    fetchNotes();
  }, [search])


  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
      <Sidebar notes={notes} setActiveNoteId={setActiveNoteId} activeNoteId={activeNoteId} setIsCreating={setIsCreating} search={search} setSearch={setSearch} />
        {isCreating ? <NewNote setIsCreating={setIsCreating} setActiveNoteId={setActiveNoteId} fetchNotes={fetchNotes} /> : 
            activeNoteId ? <NoteViewer note={notes.find((note) => note.id === activeNoteId)} setActiveNoteId={setActiveNoteId} fetchNotes={fetchNotes} /> : <EmptyNote /> 
        }
      </div>
    </main>
  );
}
