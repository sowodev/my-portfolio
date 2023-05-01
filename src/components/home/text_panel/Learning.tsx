const Learning = function learning() {
  return (
    <>
      <div className="w-full h-full px-6 py-2 overflow-y-auto">
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead indent-3 font-[Lexend]">
            This is the "Learning" section, here I try to show what I want to
            learn or deepen my knowledge about it, in the near future.
          </p>
          <div className="text-sm text-slate-500 font-[Lexend] font-extralight dark:text-slate-300">
            last update: 03/26/2023
          </div>
          <hr className="my-4 dark:border-slate-500" />
          <ul>
            <li>NextJS</li>
            <li>GraphQL</li>
            <li>NoSQL</li>
            <li>Search Engine Optimization</li>
            <li>Test Driven Development</li>
            <li>Clean Architecture</li>
            <li>Design Thinking</li>
            <li>Cloud Services</li>
            <li>Rust Programming Language look so awesome ❤️</li>
            <li>
              A pure functional Programming Language just don't know which one
              yet
            </li>
            <li>I really want to deepen my knowledge in Machine Learning 🦾</li>
            <li>
              I want to be aware of the multiple threats and solution in
              Cybersecurity ⚔️
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Learning;
