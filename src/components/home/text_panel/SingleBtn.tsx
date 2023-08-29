interface SingleBtnProps {
  name: string;
  text_to_show: string;
  setTextToShow: (text_to_show: string) => void;
}

const SingleBtn: React.FC<SingleBtnProps> = ({
  name,
  text_to_show,
  setTextToShow,
}: SingleBtnProps): React.ReactElement => {
  return (
    <button
      className={
        text_to_show === name
          ? 'flex h-[80%] basis-1/3 items-center justify-center rounded bg-slate-100 outline-none ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300 dark:bg-slate-700 dark:ring-slate-700 dark:ring-offset-blue-400'
          : 'flex h-[80%] basis-1/3 items-center justify-center rounded hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-10'
      }
      onClick={(): void => setTextToShow(name)}
      disabled={text_to_show === name}
    >
      <img
        className="w-20 h-5 md:w-24 md:h-7  drop-shadow"
        src={`/imgs/${name.toLowerCase()}.png`}
        alt={name}
      />
    </button>
  );
};

export default SingleBtn;
