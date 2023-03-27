import StackComp from "./StackComp";
import { StackData } from "./StackData";

const MyStack = function myStack() {
  return (
    <>
      <div className="w-full h-full px-6 py-12 overflow-y-auto">
        <div className="max-w-prose mx-auto">
          <img
            className="w-36 h-7"
            src="./src/assets/imgs/mystack.png"
            alt=""
          />
        </div>
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead">
            In this section I talk about my stack, the technologies I use to
            build my projects.
          </p>
          <div className="italic text-sm text-slate-500">
            last update: 03/26/2023
          </div>
          {StackData.map((current, index) => {
            return (
              <div key={index}>
                <hr className="my-4" />
                <StackComp
                  name={current.name}
                  icon={current.icon}
                  quote={current.quote}
                  desc={current.desc}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyStack;
