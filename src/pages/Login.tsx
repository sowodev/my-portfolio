import { NavLink } from "react-router-dom";

const Login = function loginPage() {
  return (
    <div className="mt-20 flex h-fit w-full justify-center">
      <div className="flex h-[38rem] w-[29rem] flex-col rounded-lg border border-slate-300 shadow-lg dark:border-slate-500 dark:shadow-slate-700">
        <div className="flex w-full basis-[15%] items-center justify-center">
          <h1 className="font-[Lexend] text-3xl text-slate-700 dark:text-white">
            Login
          </h1>
        </div>
        <div className="flex w-full">
          <form
            className="flex h-full w-full flex-col items-center justify-start gap-8"
            action=""
            method="post"
          >
            <div className="flex w-full flex-col items-center">
              <label
                className="w-[90%] font-[Lexend] dark:text-slate-200"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="flex h-[2rem] w-[90%] border-b border-slate-300 indent-2 font-[Lexend] text-[#333333ce] placeholder:font-[Lexend] placeholder:text-gray-200 focus:border-sky-400 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-700 dark:focus:border-sky-500"
                type="email"
                name="username"
                id="username"
                placeholder="Enter your email"
                pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                required
              />
            </div>
            <div className="flex w-full flex-col items-center">
              <label
                className="w-[90%] font-[Lexend] dark:text-slate-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="h-[2rem] w-[90%] border-b border-slate-300 indent-2 font-[Lexend] text-[#333333ce] placeholder:font-[Lexend] placeholder:text-gray-200 focus:border-sky-400 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-700 dark:focus:border-sky-500"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex w-[90%] flex-row justify-between">
              <div className="flex flex-row">
                <label htmlFor="check" className="flex gap-2">
                  <input
                    id="check"
                    type="checkbox"
                    className="accent-amber-300"
                  />
                  <span className="cursor-pointer select-none font-[Lexend] text-sm font-light dark:text-slate-200">
                    Keep me logged in?
                  </span>
                </label>
              </div>
              <NavLink
                to={"/forgot-password"}
                className="font-[Lexend] text-sm font-light text-slate-400 hover:text-sky-400 dark:text-slate-200 dark:hover:text-sky-500"
              >
                Forgot password?
              </NavLink>
            </div>
            <button
              className="flex h-[3rem] w-[90%] items-center justify-center rounded bg-gradient-to-b from-sky-400 to-cyan-400 indent-2 font-[Lexend] text-white transition duration-200 ease-linear hover:scale-105 hover:from-sky-500 hover:to-cyan-500"
              type="submit"
            >
              LOGIN
            </button>
          </form>
        </div>
        <div className="my-6 flex w-full flex-row items-center justify-center">
          <hr className="basis-2/5 dark:border-slate-700" />
          <span className="mx-3 font-[Lexend] text-sm font-extralight text-slate-300 dark:text-slate-600">
            OR
          </span>
          <hr className="basis-2/5 dark:border-slate-700" />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <button
            className="flex h-[3rem] w-[90%] items-center justify-center border border-slate-300 indent-2 font-[Lexend] text-slate-500 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
            type="button"
          >
            <img className="h-5 w-5" src="/imgs/google.svg" />
            Enter With Google Account
          </button>
          <button
            className="flex h-[3rem] w-[90%] items-center justify-center border border-slate-300 indent-2 font-[Lexend] text-slate-500 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
            type="button"
          >
            <img className="h-5 w-5" src="/imgs/microsoft.svg" />
            Enter With Microsoft Account
          </button>
          <span className="font-[Lexend] text-sm font-light dark:text-slate-200">
            New here?{" "}
            <NavLink
              to="/signup"
              className="font-[Lexend] text-sm font-light text-sky-400 hover:text-sky-600"
            >
              Sign Up!
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
