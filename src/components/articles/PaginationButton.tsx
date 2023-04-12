const PaginationButton = function PaginationButton() {
  return (
    <div className="flex flex-row w-full h-full">
      <button className="h-full basis-1/4 bg-cyan-300">prev</button>
      <button className="h-full basis-2/4 bg-orange-300">2/77</button>
      <button className="h-full basis-1/4 bg-pink-300">next</button>
    </div>
  );
};

export default PaginationButton;
