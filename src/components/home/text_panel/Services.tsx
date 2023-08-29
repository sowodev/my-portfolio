import React from 'react';

const Services: React.FC = function services(): React.ReactElement {
  return (
    <>
      <div className="h-full w-full overflow-y-auto px-6 py-2">
        <div className="prose prose-slate mx-auto mt-4">
          <p className="mb-2 text-justify font-[Lexend] text-lg md:text-2xl lg:text-3xl font-bold dark:text-white">
            Looking for someone to build or fix your web application?{' '}
            <span className="text-amber-200 underline">Your search ends here.</span>
          </p>
          <div className="font-[Lexend] text-sm lg:text-base dark:text-slate-300"></div>
        </div>
      </div>
    </>
  );
};

export default Services;
