const StackComp = function stackComp({ name, icon }: { name: string; icon: string }) {
  const src: string = '/imgs/mystack/' + icon + '.svg';
  return (
    <div className="flex flex-col p-1 justify-center items-center border border-slate-800">
      <img className="w-[30px] lg:w-[60px]" alt={name} src={src} />{' '}
      <span className="w-[80px] break-words font-bold lg:font-light text-xs text-center text-white">
        {name}
      </span>
    </div>
  );
};

export default StackComp;
