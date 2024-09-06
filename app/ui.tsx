import EmptyNote from "@/components/empty-note";
import Header from "@/components/header";
import NewNote from "@/components/new-note";
import NoteViewer from "@/components/note-viewer";
import Sidebar from "@/components/sidebar";

export default function UI() {
  const notes = [
    { id: 1, title: "test" },
    { id: 2, title: "test note 2" },
  ];
  const activeNoteId = null;
  
  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <Sidebar notes={notes} />
        {/* <EmptyNote /> */}
        {/* <NewNote /> */}
        <NoteViewer note={notes.find((note) => note.id === activeNoteId)} />
      </div>
    </main>
  );
}
