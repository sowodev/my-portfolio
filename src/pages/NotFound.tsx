import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="font-[Lexend] text-5xl font-bold text-gray-800">404!</h1>
      <h2 className="font-[Lexend] text-2xl font-bold text-gray-500">
        Oops, Page not found.
      </h2>
      <p className="font-[Lexend] text-gray-500">
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <button
        className="mt-8 flex h-12 w-36 flex-row items-center justify-center gap-3 rounded bg-gradient-to-b from-sky-400 to-cyan-400 ring-1 ring-sky-500 hover:from-sky-500 hover:to-cyan-500"
        onClick={() => navigate(-1)}
      >
        <span className="font-[Lexend] text-white">Go Back</span>
      </button>
    </div>
  );
}
