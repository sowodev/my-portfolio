import { ReactElement } from "react";

const Me = function me(): ReactElement {
  return (
    <>
      <div className="w-full h-full text-white px-6 py-12 overflow-y-auto">
        <div className="max-w-prose mx-auto">
          <img className="w-14 h-7" src="./src/assets/imgs/me.png" alt="" />
        </div>
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead">
            This is a quick example of the typography plugin
          </p>
          <p>
            Hi there, my name is Wendell, but here in the digital world you can
            call me Sowodin, I'm a Full Stack Software
            Developer/Programmer/Software Engineer, I'm passionate about
            innovation and technology and my biggest dream is to be able to help
            humanity to overcome its biggests challenges, leaving a legacy of
            inspiration and motivation to the future generations. I also really
            want to create, develop and lead new business ideas (despite having
            a lot to learn yet 😄). I'm currently working with Full Stack Web
            Development, and I am guided by developing secure, robust, reliable
            and scalable systems.
          </p>
        </div>
      </div>
    </>
  );
};

export default Me;
