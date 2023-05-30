import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GlobalContext } from "../context/GlobalContext";

const CreditsModal = function creditsModal() {
  const { set_credits, set_dark } = useContext(GlobalContext);
  const dark: boolean = set_dark.is_dark === "dark";

  const closeModal = () => {
    set_credits.setOpenCredits(false);
  };

  return (
    <Transition appear as={Fragment} show={set_credits.open_credits}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full max-w-md transform overflow-hidden rounded-lg p-6 text-left align-middle shadow-xl transition-all ${
                  dark ? "bg-slate-700" : "bg-white"
                }`}
              >
                <Dialog.Title
                  as="div"
                  className="flex w-full flex-row items-center justify-between font-[Lexend] text-lg font-medium leading-6 text-gray-900"
                >
                  <p className={`${dark && `text-white`}`}> Credits!</p>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded bg-gradient-to-b from-orange-300 to-amber-300 drop-shadow transition duration-200 ease-linear hover:scale-110 hover:from-orange-400 hover:to-amber-400"
                    onClick={() => set_credits.setOpenCredits(false)}
                  >
                    <p className="text-center font-light text-white">&times;</p>
                  </button>
                </Dialog.Title>

                <hr className="my-2 border-slate-300 dark:bg-slate-500" />
                <div className="flex w-full flex-col">
                  <img
                    className="h-24 w-24"
                    src="/imgs/chest-only.png"
                    alt="chest"
                  />
                  <p
                    className={`font-[Lexend] text-sm font-light leading-6 ${
                      dark && `text-slate-300`
                    }`}
                  >
                    This treasure chest above, finded at the home page is a free
                    liscenced asset for commercial use with attribution, asset
                    from freepik.com, and you can find it at the following link:
                  </p>
                  <a
                    className="font-[Lexend] text-sm font-light leading-6 text-blue-500 hover:text-blue-700"
                    href="https://www.freepik.com/free-vector/treasure-chest-with-gold-coins-and-gems_27777164.htm"
                    target="_blank"
                  >
                    https://www.freepik.com/free-vector/treasure-chest-with-gold-coins-and-gems_27777164.htm
                  </a>
                </div>
                <hr className="my-2 border-slate-300 dark:bg-slate-500" />
                <p
                  className={`font-[Lexend] text-sm font-light leading-6 ${
                    dark && `text-slate-300`
                  }`}
                >
                  This entire portifolio was made using free liscenced assets
                  and free liscenced libraries, frameworks and other tools, all
                  the rights reserved, you can find more information about the
                  tools used at "MyStack" section on the home page.
                </p>
                <hr className="my-2 border-slate-300 dark:bg-slate-500" />
                <p
                  className={`font-[Lexend] text-sm font-light leading-6 ${
                    dark && `text-slate-300`
                  }`}
                >
                  This portifolio was made by me (Wendell Oliveira da Silva),
                  and you can find the source code at the following link:
                </p>
                <a
                  className={`font-[Lexend] text-sm font-light leading-6 text-blue-500 hover:text-blue-700`}
                  href="https://github.com/sowodin/my-portfolio"
                  target="_blank"
                >
                  https://github.com/sowodin/my-portfolio
                </a>
                <hr className="my-2 border-slate-300 dark:bg-slate-500" />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreditsModal;
