import { Fragment, useContext } from "react";
import { Dialog, Transition } from "@headlessui/react";

type CreditsProps = {
  open_credits: boolean;
  setOpenCredits: (open: boolean) => void;
};

const CreditsModal = function creditsModal({
  open_credits,
  setOpenCredits,
}: CreditsProps) {
  const closeModal = () => {
    setOpenCredits(false);
  };

  return (
    <Transition appear as={Fragment} show={open_credits}>
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
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-slate-700">
                <Dialog.Title
                  as="h4"
                  className="font-[Lexend] text-lg font-medium leading-6 text-gray-900"
                >
                  Credits!
                </Dialog.Title>

                <div className="flex flex-col w-full">
                  <img
                    className="w-36 h-24"
                    src="/src/assets/imgs/chest2.png"
                    alt="chest"
                  />
                  <p className="font-[Lexend] text-sm font-light leading-6">
                    The treasure chest above, finded at the home page is a free
                    liscence asset for commercial use with attribution, and you
                    can find it at the following link:
                  </p>
                  <a
                    className="font-[Lexend] text-sm font-light leading-6 text-blue-500 hover:text-blue-700"
                    href="https://www.freepik.com/free-vector/treasure-chest-with-gold-coins-and-gems_27777164.htm"
                    target="_blank"
                  >
                    https://www.freepik.com/free-vector/treasure-chest-with-gold-coins-and-gems_27777164.htm
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreditsModal;
