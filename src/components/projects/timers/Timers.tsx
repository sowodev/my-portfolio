import { useState } from "react";
import CountdownTimer from "./CountdownTimer";
import TimersList from "./TimersList";
import AddTimerModal from "./modal/AddTimerModal";

const Timers = function timers() {
  const [show_modal, setShowModal] = useState(false);
  return (
    <div className="flex w-full h-full justify-center items-center">
      <TimersList setShowModal={setShowModal} />
      <CountdownTimer />
      <AddTimerModal show_modal={show_modal} setShowModal={setShowModal} />
    </div>
  );
};

export default Timers;
