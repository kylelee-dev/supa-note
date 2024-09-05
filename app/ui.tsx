import EmptyNote from "@/components/empty-note";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";

export default function UI() {
  const notes = [
    { id: 1, title: "test" },
    { id: 2, title: "test note 2" },
  ];
  return (
    <main className="w-full h-screen flex flex-col">
      <Header />
      <div className="grow relative">
        <Sidebar notes={notes} />
      </div>
    </main>
  );
}
