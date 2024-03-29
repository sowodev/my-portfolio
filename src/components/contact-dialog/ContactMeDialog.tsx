import LoadingComponent from '@components/loading/LoadingComponent';
import AppContext from '@context/AppContext';
import { Dialog, Transition } from '@headlessui/react';
import { ArchiveBoxXMarkIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { FC, Fragment, ReactElement, useContext, useState } from 'react';
import InputField from './InputField';

const ContactMeDialog: FC = (): ReactElement => {
  const { contact_me, theme } = useContext(AppContext);
  const dark: boolean = theme.mode === 'dark';
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const mutation = useMutation({
    mutationFn: () =>
      axios
        .post(import.meta.env.VITE_DATABASE_CONTACT_MSG, {
          name,
          email,
          subject,
          message,
        })
        .then((res) => res.data),
  });

  const closeDialog = () => {
    contact_me.setOpenDialog(false);
  };

  const closeDialogOnSuccess = () => {
    contact_me.setOpenDialog(false);

    mutation.reset();
  };

  // TODO: Fix this type any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    mutation.mutate();
  };

  return (
    <Transition appear as={Fragment} show={contact_me.open_dialog}>
      <Dialog as="div" className="relative z-10" onClose={closeDialog}>
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
                  className={`flex text-lg font-medium leading-6 text-gray-900 justify-between items-center ${
                    dark && 'text-white'
                  }`}
                >
                  {mutation.isLoading
                    ? 'Sending Message...'
                    : mutation.isError
                    ? 'Error Sending The Message'
                    : mutation.isSuccess
                    ? 'Message Successeful'
                    : 'Leave Us a Message!'}
                  <button
                    className={`flex rounded p-2 hover:bg-slate-100 ${
                      dark && `hover:bg-slate-600`
                    }`}
                    onClick={closeDialog}
                  >
                    <XMarkIcon className="h-5" />
                  </button>
                </Dialog.Title>

                {/* The Form Starts Here!!! */}
                {mutation.isLoading ? (
                  <LoadingComponent />
                ) : mutation.isSuccess ? (
                  <div className="flex h-full w-full flex-col gap-4 py-4 justify-center items-center">
                    <CheckCircleIcon className="w-16 h-16 stroke-green-500" />
                    <p className="text-lg">
                      <b>Yeeeeah, all good!</b> Thank you very much for your message. I will do my
                      best to answer as soon as possible!
                    </p>
                    <button
                      type="button"
                      className="flex h-[3rem] w-1/4 items-center justify-center rounded bg-sky-400 text-center text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeDialogOnSuccess}
                    >
                      Confirm
                    </button>
                  </div>
                ) : mutation.isError ? (
                  <div className="flex h-full w-full flex-col gap-4 py-4 justify-center items-center">
                    <ArchiveBoxXMarkIcon className="w-16 h-16 stroke-red-500" />
                    <p className="text-lg">
                      <b>Sorry!</b> Seems that something went wrong while submitting your message.
                      Please, refresh and try again!
                    </p>
                    <button
                      type="button"
                      className="flex h-[3rem] w-1/4 items-center justify-center rounded bg-amber-300 text-center text-white transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeDialog}
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <>
                    <form action="submit" onSubmit={handleSubmit}>
                      <div className="flex h-full w-full flex-col gap-4 py-4">
                        <div className="flex w-full flex-col items-center">
                          <InputField
                            label={'Name'}
                            dark={dark}
                            type={'text'}
                            name={'username'}
                            placeholder={'Enter your name'}
                            setOnChange={setName}
                          />
                        </div>
                        <div className="flex w-full flex-col items-center">
                          <InputField
                            label={'Email'}
                            dark={dark}
                            type={'text'}
                            name={'useremail'}
                            placeholder={'email@example.com'}
                            setOnChange={setEmail}
                          />
                        </div>
                        <div className="flex w-full flex-col items-center">
                          <InputField
                            label={'Subject'}
                            dark={dark}
                            type={'text'}
                            name={'usersubject'}
                            placeholder={'Enter the subject'}
                            setOnChange={setSubject}
                          />
                        </div>
                        <div className="flex w-full flex-col items-center">
                          <label
                            className={`w-full font-light after:ml-0.5 after:text-red-500 after:content-['*'] ${
                              dark && 'text-slate-300'
                            }`}
                            htmlFor="message"
                          >
                            Message
                          </label>
                          <textarea
                            required
                            className={
                              dark
                                ? `flex w-full border-b border-[#B0B0B0] bg-slate-700 indent-2 font-light text-slate-300 placeholder:text-gray-500 focus:border-sky-400 focus:outline-none`
                                : `flex w-full border-b border-[#B0B0B0] indent-2 font-light text-gray-500 placeholder:text-gray-200 focus:border-sky-400 focus:outline-none`
                            }
                            name="message"
                            id="message"
                            rows={5}
                            cols={50}
                            placeholder="How can we help you?"
                            onChange={(e) => setMessage(e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="flex w-full justify-between">
                        <button
                          type="button"
                          className="flex px-4 py-2 flex-row items-center justify-center gap-1 rounded bg-amber-400 duration-300 ease-in-out hover:bg-amber-500 hover:shadow-md lg:hover:shadow-lg"
                          onClick={closeDialog}
                        >
                          <span className="mx-2 text-sm md:text-base text-slate-700 dark:text-slate-100">
                            Cancel
                          </span>
                        </button>
                        <button
                          type="submit"
                          className="flex px-4 py-2 flex-row items-center justify-center gap-1 rounded bg-sky-400 duration-300 ease-in-out hover:bg-sky-500 hover:shadow-md lg:hover:shadow-lg"
                        >
                          <span className="text-sm md:text-base text-slate-700 dark:text-slate-100">
                            Send
                          </span>
                        </button>
                      </div>
                    </form>
                    <div className="my-6 flex w-full flex-row items-center justify-center">
                      <hr className="basis-2/5 dark:border-slate-700" />
                      <span className="mx-3 text-sm font-extralight text-slate-300 dark:text-slate-600">
                        OR
                      </span>
                      <hr className="basis-2/5 dark:border-slate-700" />
                    </div>
                    <div className="flex flex-col w-full justify-center items-center">
                      <p className={dark ? `text-white` : `text-slate-700`}>
                        Reach me out, through my email:
                      </p>
                      <a
                        href="mailto:wendelloliveirasud@gmail.com"
                        className={dark ? `text-blue-400` : `text-blue-500`}
                      >
                        wendelloliveirasud@gmail.com
                      </a>
                    </div>
                  </>
                )}

                {/* The Form Ends Here!!! */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactMeDialog;
