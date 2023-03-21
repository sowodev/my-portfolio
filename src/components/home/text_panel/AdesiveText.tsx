const AdesiveText = function adesiveText({ text }: { text: string }) {
  return (
    <div className="w-fit h-full mx-2 font-[Wallpoet] text-white text-3xl font-adesive">
      {"  " + text + "  "}
    </div>
  );
};

export default AdesiveText;
