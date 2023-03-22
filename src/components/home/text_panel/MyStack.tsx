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
    </>
  );
};

export default MyStack;
