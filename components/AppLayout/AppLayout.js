import Link from "next/link";

export const AppLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen max-h-screen">
      <div>
        <h4 className="text-3xl font-bold mt-5 text-indigo-500">Abe Tavarez</h4>
        <nav>
          <Link href="/root">Root</Link>
        </nav>
      </div>
      {children}
    </div>
  );
};
