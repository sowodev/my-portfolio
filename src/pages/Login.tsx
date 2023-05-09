const Login = function loginPage() {
  return (
    <div className="flex w-full h-full justify-center mt-20">
      <div className="flex flex-col h-[38rem] w-[29rem] rounded-lg border border-slate-300 shadow-lg dark:border-slate-500 dark:shadow-slate-700">
        <div className="flex w-full basis-[15%] justify-center items-center">
          <h1 className="font-[Lexend] text-3xl text-slate-700 dark:text-white">
            Login
          </h1>
        </div>
        <div className="flex w-full">
          <form
            className="flex flex-col gap-8 w-full h-full justify-start items-center"
            action=""
            method="post"
          >
            <div className="flex flex-col w-full items-center">
              <label
                className="font-[Lexend] w-[90%] dark:text-slate-200"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="flex w-[90%] h-[2rem] font-[Lexend] text-[#333333ce] border-b border-slate-300 indent-2 placeholder:font-[Lexend] placeholder:text-gray-200 focus:outline-none focus:border-sky-400 dark:bg-slate-800 dark:placeholder-slate-700 dark:text-slate-300 dark:border-slate-600 dark:focus:border-sky-500"
                type="text"
                name="username"
                id="username"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col w-full items-center">
              <label
                className="font-[Lexend] w-[90%] dark:text-slate-200"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-[90%] h-[2rem] font-[Lexend] text-[#333333ce] border-b border-slate-300 indent-2 placeholder:font-[Lexend] placeholder:text-gray-200 focus:outline-none focus:border-sky-400 dark:bg-slate-800 dark:placeholder-slate-700 dark:text-slate-300 dark:border-slate-600 dark:focus:border-sky-500"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex flex-row w-[90%] justify-between">
              <div className="flex flex-row">
                <label htmlFor="check" className="flex gap-2">
                  <input
                    id="check"
                    type="checkbox"
                    className="accent-amber-300"
                  />
                  <span className="font-[Lexend] font-light text-sm select-none cursor-pointer dark:text-slate-200">
                    Keep me logged in?
                  </span>
                </label>
              </div>
              <a
                href="#"
                className="font-[Lexend] font-light text-sm text-slate-400 hover:text-sky-400 dark:text-slate-200 dark:hover:text-sky-500"
              >
                Forgot password?
              </a>
            </div>
            <button
              className="flex bg-gradient-to-b from-sky-400 to-cyan-400 w-[90%] h-[3rem] font-[Lexend] text-white rounded indent-2 justify-center items-center hover:from-sky-500 hover:to-cyan-500"
              type="submit"
            >
              LOGIN
            </button>
          </form>
        </div>
        <div className="flex flex-row w-full my-6 items-center justify-center">
          <hr className="basis-2/5 dark:border-slate-700" />
          <span className="font-[Lexend] font-extralight text-sm mx-3 text-slate-300 dark:text-slate-700">
            OR
          </span>
          <hr className="basis-2/5 dark:border-slate-700" />
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-4">
          <button
            className="flex w-[90%] h-[3rem] font-[Lexend] text-slate-500 indent-2 justify-center items-center border border-slate-300 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700 dark:border-slate-600"
            type="button"
          >
            <img className="w-5 h-5" src="/src/assets/imgs/google.svg" />
            Enter With Google Account
          </button>
          <button
            className="flex w-[90%] h-[3rem] font-[Lexend] text-slate-500 indent-2 justify-center items-center border border-slate-300 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700 dark:border-slate-600"
            type="button"
          >
            <img className="w-5 h-5" src="/src/assets/imgs/microsoft.svg" />
            Enter With Microsoft Account
          </button>
          <span className="font-[Lexend] font-light text-sm dark:text-slate-200">
            New here?{" "}
            <a
              href="#"
              className="font-[Lexend] font-light text-sm text-sky-400 hover:text-sky-600"
            >
              Sign Up!
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
