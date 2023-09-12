interface Props {
  text: string;
  number: number;
  border?: boolean;
}
const SatisfactionItem = ({ text, number, border }: Props) => {
  return (
    <div className='space-y-4 md:space-y-0 md:w-full'>
      <h1 className='text-darkViolet-1000 text-2xl font-extrabold'>
        {number}+
      </h1>
      <p className='text-darkViolet-600'>{text}</p>
      {border && (
        <div className='border border-dashed border-gray-200 w-1/2 md:hidden'></div>
      )}
    </div>
  );
};

export default SatisfactionItem;
