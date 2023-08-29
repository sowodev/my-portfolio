import SingleBtn from './SingleBtn';

type Props = {
  text_to_show: string;
  setTextToShow: (text_to_show: string) => void;
};

const BtnsGroup: React.FC<Props> = ({ text_to_show, setTextToShow }: Props): React.ReactElement => {
  return (
    <div className="flex w-[95%] h-[80%] px-[5%] md:w-[80%] flex-row items-center justify-center gap-4 rounded-lg border border-[#f5f5f538] bg-[#ffffff3f]">
      <SingleBtn name={'Services'} text_to_show={text_to_show} setTextToShow={setTextToShow} />

      <div className="w-0 h-[80%] border-s border-[#ffffff3f]" />

      <SingleBtn name={'Tools'} text_to_show={text_to_show} setTextToShow={setTextToShow} />

      <div className="w-0 h-[80%] border-s border-[#ffffff3f]" />

      <SingleBtn name={'About'} text_to_show={text_to_show} setTextToShow={setTextToShow} />
    </div>
  );
};

export default BtnsGroup;
