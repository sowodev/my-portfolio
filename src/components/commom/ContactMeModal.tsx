import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GlobalContext } from "./context/GlobalContext";

const ContactMeModal = function contactMeModal() {
  const { set_dialog, set_dark } = useContext(GlobalContext);
  const dark: boolean = set_dark.is_dark === "dark";

  const closeModal = () => {
    set_dialog.setOpenDialog(false);
  };

  return (
    <Transition appear as={Fragment} show={set_dialog.open_dialog}>
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
                className={
                  dark
                    ? `w-full max-w-md transform overflow-hidden rounded-lg p-6 text-left align-middle shadow-xl transition-all bg-slate-700`
                    : `w-full max-w-md transform overflow-hidden rounded-lg p-6 text-left align-middle shadow-xl transition-all bg-white`
                }
              >
                <Dialog.Title
                  as="h4"
                  className={`font-[Lexend] text-lg font-medium leading-6 text-gray-900 ${
                    dark && "text-white"
                  }`}
                >
                  Leave Me a Message!
                </Dialog.Title>

                <div className="flex flex-col w-full h-full gap-4 py-4">
                  <div className="flex flex-col w-full items-center">
                    <label
                      className={`font-[Lexend] w-full font-light ${
                        dark && "text-slate-300"
                      }`}
                      htmlFor="username"
                    >
                      Name
                    </label>
                    <input
                      className={
                        dark
                          ? `flex w-full bg-slate-700 h-[2rem] font-[Lexend] font-light text-slate-300 border-b border-[#B0B0B0] indent-2 placeholder:text-gray-500 focus:outline-none focus:border-sky-400`
                          : `flex w-full h-[2rem] font-[Lexend] font-light text-gray-500 border-b border-[#B0B0B0] indent-2 placeholder:text-gray-200 focus:outline-none focus:border-sky-400`
                      }
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="flex flex-col w-full items-center">
                    <label
                      className={`font-[Lexend] w-full font-light ${
                        dark && "text-slate-300"
                      }`}
                      htmlFor="useremail"
                    >
                      Email
                    </label>
                    <input
                      className={
                        dark
                          ? `flex w-full bg-slate-700 h-[2rem] font-[Lexend] font-light text-slate-300 border-b border-[#B0B0B0] indent-2 placeholder:text-gray-500 focus:outline-none focus:border-sky-400`
                          : `flex w-full h-[2rem] font-[Lexend] font-light text-gray-500 border-b border-[#B0B0B0] indent-2 placeholder:text-gray-200 focus:outline-none focus:border-sky-400`
                      }
                      type="text"
                      name="useremail"
                      id="useremail"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="flex flex-col w-full items-center">
                    <label
                      className={`font-[Lexend] w-full font-light ${
                        dark && "text-slate-300"
                      }`}
                      htmlFor="usersubject"
                    >
                      Subject
                    </label>
                    <input
                      className={
                        dark
                          ? `flex w-full bg-slate-700 h-[2rem] font-[Lexend] font-light text-slate-300 border-b border-[#B0B0B0] indent-2 placeholder:text-gray-500 focus:outline-none focus:border-sky-400`
                          : `flex w-full h-[2rem] font-[Lexend] font-light text-gray-500 border-b border-[#B0B0B0] indent-2 placeholder:text-gray-200 focus:outline-none focus:border-sky-400`
                      }
                      type="text"
                      name="usersubject"
                      id="usersubject"
                      placeholder="Enter the subject"
                    />
                  </div>
                  <div className="flex flex-col w-full items-center">
                    <label
                      className={`font-[Lexend] w-full font-light ${
                        dark && "text-slate-300"
                      }`}
                      htmlFor="content"
                    >
                      Message
                    </label>
                    <textarea
                      className={
                        dark
                          ? `flex w-full bg-slate-700 font-[Lexend] font-light text-slate-300 border-b border-[#B0B0B0] indent-2 placeholder:text-gray-500 focus:outline-none focus:border-sky-400`
                          : `flex w-full font-[Lexend] font-light text-gray-500 border-b border-[#B0B0B0] indent-2 placeholder:text-gray-200 focus:outline-none focus:border-sky-400`
                      }
                      name="content"
                      id="content"
                      rows={5}
                      cols={50}
                      placeholder="Leave me a message!"
                    />
                  </div>
                </div>

                <div className="flex w-full justify-between">
                  <button
                    type="button"
                    className="flex bg-gradient-to-b from-orange-300 to-amber-300 transition w-1/4 h-[3rem] font-[Lexend] text-white text-center rounded justify-center items-center hover:from-orange-400 hover:to-amber-400 hover:shadow-lg hover:scale-110 ease-in-out duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="flex bg-gradient-to-b from-sky-400 to-cyan-400 transition w-1/4 h-[3rem] font-[Lexend] text-white text-center rounded justify-center items-center hover:from-sky-500 hover:to-cyan-500 hover:shadow-lg hover:scale-110 ease-in-out duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Send
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactMeModal;
