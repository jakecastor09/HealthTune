import { BsCheckCircle } from 'react-icons/bs';
interface Props {
  text: string;
}
const CareBoxItem = ({ text }: Props) => {
  return (
    <h4 className='flex items-center lg:text-lg'>
      <span className='mr-2'>
        <BsCheckCircle color='blue' />
      </span>
      {text}
    </h4>
  );
};

export default CareBoxItem;
