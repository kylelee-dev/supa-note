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
    const { data, error } = await supabase.from("note").select("*");

    if (error) {
        alert(error.message);
        return;
    } 
    setNotes(data);
  };
  const activeNoteId = null;
  const isCreating = null;
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
      <Sidebar notes={notes} />
        {isCreating ? <NewNote /> : 
            activeNoteId ? <NoteViewer note={notes.find((note) => note.id === activeNoteId)}/> : <EmptyNote /> 
        }
      </div>
    </main>
  );
}
