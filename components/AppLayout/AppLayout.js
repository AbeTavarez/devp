import Link from "next/link";

export const AppLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen max-h-screen">
      <div className="p-3 font-mono">
        <h4 className="text-3xl font-bold mt-5 text-indigo-500 tracking-wide">
          <Link href="/root">Abraham E. Tavarez</Link>
        </h4>
        <nav className="mt-10 flex flex-col">
          <h3 className="mb-1 text-xl text-yellow-400">Directory</h3>
          <Link
            className="bg-violet-400 font-bold border-b rounded-t-sm p-1 hover:translate-x-2 mt-2"
            href="/root"
          >
            /Root
          </Link>

          <Link
            className="bg-violet-400 font-bold border-b p-1 hover:translate-x-2 mt-2"
            href="/projects"
          >
            /Projects
          </Link>
          <Link
            className="bg-violet-400 font-bold border-b p-1 hover:translate-x-2 mt-2"
            href="/resources"
          >
            /Resources
          </Link>
          <Link
            className="bg-violet-400 font-bold border-b p-1 hover:translate-x-2 mt-2"
            href="/message"
          >
            /Message
          </Link>
        </nav>
      </div>
      {children}
    </div>
  );
};
