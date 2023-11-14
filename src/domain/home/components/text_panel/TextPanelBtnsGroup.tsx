import SingleBtn from './SingleBtn';

type Props = {
  text_to_show: 'About' | 'Tools' | 'Services';
  setTextToShow: (text_to_show: 'About' | 'Tools' | 'Services') => void;
};

const BtnsGroup: React.FC<Props> = ({ text_to_show, setTextToShow }: Props): React.ReactElement => {
  return (
    <div className="flex w-full h-full items-center justify-center gap-4 rounded-lg border border-[#f5f5f538] bg-[#ffffff3f]">
      <div className="flex flex-row h-full w-full justify-center items-center">
        <SingleBtn
          key={'Services'}
          name={'Services'}
          text_to_show={text_to_show}
          setTextToShow={setTextToShow}
        />

        <div className="w-0 h-[80%] border-s border-[#ffffff3f]" />

        <SingleBtn
          key={'Tools'}
          name={'Tools'}
          text_to_show={text_to_show}
          setTextToShow={setTextToShow}
        />

        <div className="w-0 h-[80%] border-s border-[#ffffff3f]" />

        <SingleBtn
          key={'About'}
          name={'About'}
          text_to_show={text_to_show}
          setTextToShow={setTextToShow}
        />
      </div>
    </div>
  );
};

export default BtnsGroup;
