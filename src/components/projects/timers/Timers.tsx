import CountdownTimer from "./CountdownTimer";
import TimersList from "./TimersList";

const Timers = function timers() {
  return (
    <div className="flex w-full h-full justify-center items-center">
      <TimersList />
      <CountdownTimer />
    </div>
  );
};

export default Timers;
