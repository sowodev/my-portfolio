const SignUp = function signUp() {
  return (
    <div className="mt-20 flex h-full w-full justify-center">
      <div className="flex h-[38rem] w-[29rem] flex-col rounded-lg border border-slate-300 shadow-lg dark:border-slate-500 dark:shadow-slate-700">
        <div className="flex w-full basis-[15%] items-center justify-center">
          <h1 className="font-[Lexend] text-3xl text-slate-700 dark:text-white">
            Sign Up!
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
                htmlFor="firstname"
              >
                First Name:
              </label>
              <input
                className="flex h-[2rem] w-[90%] border-b border-slate-300 indent-2 font-[Lexend] text-[#333333ce] placeholder:font-[Lexend] placeholder:text-gray-200 focus:border-sky-400 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-700 dark:focus:border-sky-500"
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter with your first name"
                required
              />
            </div>
            <div className="flex w-full flex-col items-center">
              <label
                className="w-[90%] font-[Lexend] dark:text-slate-200"
                htmlFor="lastname"
              >
                Last Name:
              </label>
              <input
                className="flex h-[2rem] w-[90%] border-b border-slate-300 indent-2 font-[Lexend] text-[#333333ce] placeholder:font-[Lexend] placeholder:text-gray-200 focus:border-sky-400 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-700 dark:focus:border-sky-500"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter with your last name"
                required
              />
            </div>
            <div className="flex w-full flex-row items-center justify-center">
              <div className="h-full w-[45%]">
                <label
                  className="w-full font-[Lexend] dark:text-slate-200"
                  htmlFor="phone"
                >
                  Phone:
                </label>
                <input
                  className="flex h-[2rem] w-[90%] border-b border-slate-300 indent-2 font-[Lexend] text-[#333333ce] placeholder:font-[Lexend] placeholder:text-gray-200 focus:border-sky-400 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-700 dark:focus:border-sky-500"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="h-full w-[45%]">
                <label
                  className="w-full font-[Lexend] dark:text-slate-200"
                  htmlFor="birthdate"
                >
                  Birth Date:
                </label>
                <input
                  className="flex h-[2rem] w-[90%] border-b border-slate-300 indent-2 font-[Lexend] text-[#333333ce] placeholder:font-[Lexend] placeholder:text-gray-200 focus:border-sky-400 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-700 dark:focus:border-sky-500"
                  type="date"
                  name="birthdate"
                  id="birthdate"
                  required
                />
              </div>
            </div>
            <div className="flex w-full flex-col items-center">
              <label
                className="w-[90%] font-[Lexend] dark:text-slate-200"
                htmlFor="useremail"
              >
                Email
              </label>
              <input
                className="flex h-[2rem] w-[90%] border-b border-slate-300 indent-2 font-[Lexend] text-[#333333ce] placeholder:font-[Lexend] placeholder:text-gray-200 focus:border-sky-400 focus:outline-none dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:placeholder-slate-700 dark:focus:border-sky-500"
                type="email"
                name="useremail"
                id="useremail"
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
            <button
              className="flex h-[3rem] w-[90%] items-center justify-center rounded bg-gradient-to-b from-sky-400 to-cyan-400 indent-2 font-[Lexend] text-white transition duration-200 ease-linear hover:scale-105 hover:from-sky-500 hover:to-cyan-500"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
