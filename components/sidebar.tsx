export default function Sidebar({ notes }) {
  return (
    <aside className="absolute top-0 left-0 bottom-0 w-1/3 overflow-y-scroll p-2 border-r-2 border-gray-300">
      <button className="font-bold text-lg border-gray-600 p-2 border rounded-lg w-full">
        ➕ New Note
      </button>
      <input
        type="text"
        className="border border-gray-600 rounded-md w-full p-2 mt-2 "
        placeholder="Search"
      />
      <ul className="mt-4 flex flex-col gap-2">
        {notes.map((note) => {
          return (
            <li className="hover:bg-gray-200" key={note.id}>
              <button className="w-full">{note.title}</button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
