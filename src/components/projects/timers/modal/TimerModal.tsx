import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { XMarkIcon } from '@heroicons/react/24/outline';
import TypeBtnGroup from './TypeBtnGroup';
import InputTitle from './InputTitle';
import InputDescription from './InputDescription';
import InputEndDate from './InputEndDate';
import InputEndTime from './InputEndTime';
import { FormValues, TimersListController, Timer } from '../hooks/types';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  timers_list_controller: TimersListController;
};

const TimerModal: React.FC<Props> = function timerModal({
  timers_list_controller,
}: Props): ReactElement {
  // Controll the type of timer
  const [timer_type, setTimerType] = useState<'end_by_date' | 'end_by_time'>('end_by_time');

  // Form Validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();

  // TODO: REFACTOR THIS
  useEffect(() => {
    if (timers_list_controller.to_edit) {
      setValue('title', timers_list_controller.timer_to_edit!.title);
      setValue('description', timers_list_controller.timer_to_edit!.description);

      if (timers_list_controller.timer_to_edit!.type === 'end_by_date') {
        setValue('end_date', timers_list_controller.timer_to_edit!.end_date);
        setValue('end_date_time', timers_list_controller.timer_to_edit!.end_date_time);
      }

      if (timers_list_controller.timer_to_edit!.type === 'end_by_time') {
        setValue('end_time', timers_list_controller.timer_to_edit!.initial_time_to_end);
        setValue('time', timers_list_controller.timer_to_edit!.time_type);
      }
      setTimerType(timers_list_controller.timer_to_edit!.type);
    }
  }, [timers_list_controller.to_edit, timers_list_controller.timer_to_edit]);

  // Modal Controls
  const closeModal = () => {
    timers_list_controller.setShowModal(false);
    timers_list_controller.setToEdit(false);
    setTimerType('end_by_time');
    reset();
  };

  // TODO: REFACTOR THIS
  const onSubmit: SubmitHandler<FormValues> = (e: FormValues) => {
    if (timer_type === 'end_by_date') {
      const timer: Timer = {
        uuid: timers_list_controller.to_edit
          ? timers_list_controller.timer_to_edit!.uuid
          : uuidv4(),
        title: e.title,
        description: e.description,
        end_date: e.end_date,
        end_date_time: e.end_date_time,
        is_completed: false,
        type: timer_type,
        is_selected:
          timers_list_controller.getTimers().length === 0
            ? true
            : timers_list_controller.to_edit
            ? timers_list_controller.timer_to_edit!.is_selected
            : false,
      };
      if (timers_list_controller.to_edit) {
        timers_list_controller.updateTimer(timer);
      } else timers_list_controller.setTimer(timer);
    }

    if (timer_type === 'end_by_time') {
      const timer: Timer = {
        uuid: timers_list_controller.to_edit
          ? timers_list_controller.timer_to_edit!.uuid
          : uuidv4(),
        title: e.title,
        description: e.description,
        time_to_end: e.end_time,
        initial_time_to_end: e.end_time,
        is_completed: false,
        type: timer_type,
        time_type: e.time,
        is_selected:
          timers_list_controller.getTimers().length === 0
            ? true
            : timers_list_controller.to_edit
            ? timers_list_controller.timer_to_edit!.is_selected
            : false,
      };
      if (timers_list_controller.to_edit) timers_list_controller.updateTimer(timer);
      else timers_list_controller.setTimer(timer);
    }

    closeModal();
  };
  // End modal controls

  return (
    <Transition appear as={Fragment} show={timers_list_controller.show_modal}>
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
                    false && 'text-white'
                  }`}
                >
                  {timers_list_controller.to_edit ? 'Save Timer!' : 'Create Timer!'}
                  <button className="flex rounded hover:bg-gray-100" onClick={closeModal}>
                    <XMarkIcon className="h-7" />
                  </button>
                </Dialog.Title>
                <TypeBtnGroup timer_type={timer_type} setTimerType={setTimerType} />

                {/* The Form Starts Here!!! */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 p-4">
                  <InputTitle register={register} errors={errors} />
                  <InputDescription register={register} errors={errors} />
                  {timer_type === 'end_by_time' ? (
                    <InputEndTime register={register} errors={errors} dark={false} />
                  ) : (
                    <InputEndDate register={register} errors={errors} />
                  )}
                  <div className="flex w-full justify-between font-[Lexend] text-white">
                    <button
                      type="button"
                      className="flex h-12 px-4 items-center justify-center rounded bg-amber-300 text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-amber-400 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex h-12 px-4 items-center justify-center rounded bg-sky-400 text-center transition duration-300 ease-in-out hover:scale-110 hover:bg-sky-500 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      {timers_list_controller.to_edit ? 'Save' : 'Create'}
                    </button>
                  </div>
                  <input {...register('timer_type')} type="hidden" value={timer_type} />
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

export default TimerModal;
