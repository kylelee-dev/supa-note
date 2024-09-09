export default function Sidebar({ notes, setActiveNoteId,activeNoteId, setIsCreating, search, setSearch }) {

  
  return (
    <aside className="absolute top-0 left-0 bottom-0 w-1/3 overflow-y-scroll p-2 border-r-2 border-gray-300">
      <button className="font-bold text-lg border-gray-600 p-2 border rounded-lg w-full"
      onClick={() => {
        setIsCreating(true);
        setActiveNoteId(null);
      }}>
        ➕ New Note
      </button>
      <input
        type="text"
        className="border border-gray-600 rounded-md w-full p-2 mt-2 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <ul className="mt-4 flex flex-col gap-2">
        {notes.map((note) => {
          return (
            <li className="hover:bg-gray-200" key={note.id}>
              <button
                className={activeNoteId === note.id ? "w-full font-bold" : "w-full"}
                onClick={() => 
                  {
                    setIsCreating(false);
                    setActiveNoteId(note.id)}}
              >
                {note.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
