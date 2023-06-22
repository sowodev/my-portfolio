import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import {
  CalendarIcon,
  ClockIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

type Props = {
  show_modal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddTimerModal: React.FC<Props> = function addTimerModal({
  show_modal,
  setShowModal,
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    setShowModal(false);
  };

  const closeModalOnSuccess = () => {};

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <Transition appear as={Fragment} show={show_modal}>
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
                  false
                    ? `w-full max-w-md transform overflow-hidden rounded-lg bg-slate-700 p-6 text-left align-middle shadow-xl transition-all`
                    : `w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all`
                }
              >
                <Dialog.Title
                  as="div"
                  className={`flex flex-row font-[Lexend] text-lg font-medium leading-6 text-gray-900 justify-between ${
                    false && "text-white"
                  }`}
                >
                  Create Timer!
                  <button
                    className="flex rounded hover:bg-gray-100"
                    onClick={() => setShowModal(false)}
                  >
                    <XMarkIcon className="h-7" />
                  </button>
                </Dialog.Title>

                {/* The Form Starts Here!!! */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-4 p-4"
                >
                  <div
                    role="group"
                    className="flex flex-row h-10 w-2/3 font-[Lexend] text-sm font-light bg-sky-300 self-center justify-center items-center rounded"
                  >
                    <button className="flex flex-row gap-1 basis-1/2 h-full justify-center items-center bg-sky-400 rounded-l hover:bg-black hover:bg-opacity-10">
                      <ClockIcon className="h-5" />
                      <span>Time to End</span>
                    </button>
                    <div className="w-0 h-[80%] border-s border-sky-500" />
                    <button className="flex flex-row gap-1 basis-1/2 h-full justify-center items-center rounded-r hover:bg-black hover:bg-opacity-10">
                      <CalendarIcon className="h-5" />
                      <span>End Date</span>
                    </button>
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <label
                      className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
                        false && "text-slate-300"
                      }`}
                      htmlFor="username"
                    >
                      Title
                    </label>
                    <input
                      required
                      className={
                        false
                          ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`
                          : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-gray-200 focus:border-sky-400 focus:outline-none`
                      }
                      type="text"
                      name="title"
                      id="title"
                      placeholder="give your timer a title!"
                      pattern="[^'\x22]+" // disallow quotes
                      /* onChange={(e) => setOnChange(e.target.value)} */
                    />
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <label
                      className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
                        false && "text-slate-300"
                      }`}
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      required
                      className={
                        false
                          ? `flex w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`
                          : `flex w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-gray-200 focus:border-sky-400 focus:outline-none`
                      }
                      name="description"
                      id="description"
                      rows={1}
                      cols={30}
                      placeholder="write a quick description for this timer!"
                      /* onChange={} */
                    />
                  </div>
                  <div className="flex w-full flex-col items-center">
                    <label
                      className={`w-full font-[Lexend] font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
                        false && "text-slate-300"
                      }`}
                      htmlFor="datetime"
                    >
                      End Date
                    </label>
                    <input
                      required
                      className={
                        false
                          ? `flex h-[2rem] w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-[Lexend] font-light text-slate-300 placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`
                          : `flex h-[2rem] w-full border-b border-[#B0B0B0] indent-2 font-[Lexend] font-light text-gray-500 placeholder:text-gray-200 focus:border-sky-400 focus:outline-none`
                      }
                      type="datetime-local"
                      name="datetime"
                      id="datetime"
                      /* onChange={(e) => setOnChange(e.target.value)} */
                    />
                  </div>
                  <div className="flex w-full justify-between">
                    <button
                      type="button"
                      className="flex h-12 px-4 items-center justify-center rounded bg-gradient-to-b from-yellow-300 to-amber-300 text-center font-[Lexend] text-white transition duration-300 ease-in-out hover:scale-110 hover:from-yellow-400 hover:to-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex h-12 px-4 items-center justify-center rounded bg-gradient-to-b from-cyan-400 to-sky-400 text-center font-[Lexend] text-white transition duration-300 ease-in-out hover:scale-110 hover:from-cyan-500 hover:to-sky-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Create
                    </button>
                  </div>
                </form>
                {/* The Form Ends Here!!! */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddTimerModal;
