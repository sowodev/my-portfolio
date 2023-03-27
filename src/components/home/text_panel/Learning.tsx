const Learning = function learning() {
  return (
    <>
      <div className="w-full h-full px-6 py-12 overflow-y-auto">
        <div className="max-w-prose mx-auto">
          <img
            className="w-40 h-7"
            src="./src/assets/imgs/learning.png"
            alt=""
          />
        </div>
        <div className="mt-4 prose prose-slate mx-auto">
          <p className="lead">
            In this section I talk about what I'm learning, the technologies I
            want to learn and the technologies I want to deepen my knowledge.
          </p>
          <div className="italic text-sm text-slate-500">
            last update: 03/26/2023
          </div>
          <hr className="my-4" />
          <ul>
            <li>Search Engine Optimization</li>
            <li>Test Driven Development</li>
            <li>Clean Architecture</li>
            <li>Design Thinking</li>
            <li>Cloud Services</li>
            <li>Rust Programming Language look so awesome ❤️</li>
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
