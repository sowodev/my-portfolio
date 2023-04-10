import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-5xl font-bold text-gray-800 font-[Lexend]">404!</h1>
      <h2 className="text-2xl font-bold text-gray-500 font-[Lexend]">
        Oops, Page not found.
      </h2>
      <p className="text-gray-500 font-[Lexend]">
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <button
        className="flex flex-row gap-3 w-36 h-12 mt-8 bg-gradient-to-b from-sky-400 to-cyan-400 ring-1 ring-sky-500 rounded justify-center items-center hover:from-sky-500 hover:to-cyan-500"
        onClick={() => navigate(-1)}
      >
        <span className="font-[Lexend] text-white">Go Back</span>
      </button>
    </div>
  );
}
