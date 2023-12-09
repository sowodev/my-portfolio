import React from 'react';
import WorkingInProgress from '../WorkingInProgress';
import CalendarComponent from './Calendar';

const Scheduler: React.FC = function scheduler(): React.ReactElement {
  const [is_finished, setIsFinished] = React.useState(false);
  return (
    <div className="flex w-full h-full justify-center items-center">
      {is_finished ? <CalendarComponent /> : <WorkingInProgress project="Scheduler" />}
    </div>
  );
};

export default Scheduler;
