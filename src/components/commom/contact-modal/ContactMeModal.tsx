import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GlobalContext } from "../context/GlobalContext";

const ContactMeModal = function contactMeModal() {
  const { set_dialog, set_dark } = useContext(GlobalContext);
  const dark: boolean = set_dark.is_dark === "dark";
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const closeModal = () => {
    set_dialog.setOpenDialog(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, email, subject, message);
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
                    ? `w-full max-w-md transform overflow-hidden rounded-lg bg-slate-700 p-6 text-left align-middle shadow-xl transition-all`
                    : `w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all`
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
                <form action="submit">
                  <div className="flex h-full w-full flex-col gap-4 py-4">
                    <div className="flex w-full flex-col items-center">
                      <label
                        className={`w-full font-[Lexend] font-light ${
                          dark && "text-slate-300"
                        }`}
                        htmlFor="username"
                      >
                        Name
                      </label>
                      <input
                        className={
                          dark
                            ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`
                            : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-gray-200 focus:border-sky-400 focus:outline-none`
                        }
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your name"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex w-full flex-col items-center">
                      <label
                        className={`w-full font-[Lexend] font-light ${
                          dark && "text-slate-300"
                        }`}
                        htmlFor="useremail"
                      >
                        Email
                      </label>
                      <input
                        className={
                          dark
                            ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`
                            : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-gray-200 focus:border-sky-400 focus:outline-none`
                        }
                        type="text"
                        name="useremail"
                        id="useremail"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="flex w-full flex-col items-center">
                      <label
                        className={`w-full font-[Lexend] font-light ${
                          dark && "text-slate-300"
                        }`}
                        htmlFor="usersubject"
                      >
                        Subject
                      </label>
                      <input
                        className={
                          dark
                            ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`
                            : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-gray-200 focus:border-sky-400 focus:outline-none`
                        }
                        type="text"
                        name="usersubject"
                        id="usersubject"
                        placeholder="Enter the subject"
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>
                    <div className="flex w-full flex-col items-center">
                      <label
                        className={`w-full font-[Lexend] font-light ${
                          dark && "text-slate-300"
                        }`}
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        className={
                          dark
                            ? `flex w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`
                            : `flex w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-gray-200 focus:border-sky-400 focus:outline-none`
                        }
                        name="message"
                        id="message"
                        rows={5}
                        cols={50}
                        placeholder="Leave me a message!"
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex w-full justify-between">
                    <button
                      type="button"
                      className="flex h-[3rem] w-1/4 items-center justify-center rounded bg-gradient-to-b from-orange-300 to-amber-300 text-center font-[Lexend] text-white transition duration-300 ease-in-out hover:scale-110 hover:from-orange-400 hover:to-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="flex h-[3rem] w-1/4 items-center justify-center rounded bg-gradient-to-b from-sky-400 to-cyan-400 text-center font-[Lexend] text-white transition duration-300 ease-in-out hover:scale-110 hover:from-sky-500 hover:to-cyan-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleSubmit}
                    >
                      Send
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactMeModal;
