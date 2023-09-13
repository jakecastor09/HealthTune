import { BsPlusLg, BsDashLg } from 'react-icons/bs';

interface Props {
  question: string;
  answer: string;
  isOpen: boolean;
  onHandleClick: () => void;
}
const QuestionItem = ({ question, answer, isOpen, onHandleClick }: Props) => {
  const icon = isOpen ? <BsDashLg size='24px' /> : <BsPlusLg size='24px' />;
  return (
    <div
      className='flex flex-col space-y-1 cursor-pointer'
      onClick={onHandleClick}
    >
      <div className='py-3 px-6 rounded-md border space-x-8 border-darkViolet-200 flex justify-between items-center'>
        <h3 className='text-darkViolet-1000 font-bold'>{question}</h3>
        {icon}
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } py-4 px-6 rounded-md border border-darkViolet-200 text-darkViolet-300 `}
      >
        {answer}
      </div>
    </div>
  );
};

export default QuestionItem;
