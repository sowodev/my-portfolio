import AdesiveText from "./text_panel/AdesiveText";

const TextPanel = function textPanel() {
  const src: string = "./src/assets/imgs/me.png";
  const src1: string = "./src/assets/imgs/learning.png";
  const src2: string = "./src/assets/imgs/mystack.png";

  const size: string = "w-20 h-10";
  const size1: string = "w-30 h-10";
  const size2: string = "w-26 h-10";
  return (
    <div className="flex shadow-lg ring-1 ring-gray-900/5 w-3/4 h-3/4">
      <div className="w-full h-full px-6 py-12 overflow-y-auto">
        <div className="max-w-prose mx-auto">
          <img className={size2} src={src2} alt="" />
        </div>
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead">
            This is a quick example of the typography plugin
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextPanel;
