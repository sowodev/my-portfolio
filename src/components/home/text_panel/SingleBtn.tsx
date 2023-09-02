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
    <div className="flex h-full w-[33%] justify-center items-center">
      <button
        className={
          text_to_show === name
            ? `flex h-[80%] w-[85%] items-center justify-center rounded bg-slate-100 outline-none ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-300 dark:bg-slate-700 dark:ring-slate-700 dark:ring-offset-blue-400 cursor-not-allowed`
            : `flex h-[80%] w-[85%] items-center justify-center rounded hover:bg-black hover:bg-opacity-10`
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
    </div>
  );
};

export default SingleBtn;
