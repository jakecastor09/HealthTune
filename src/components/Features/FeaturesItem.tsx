interface Props {
  title: string;
  content: string;
  img: string;
}
const FeaturesItem = ({ title, content, img }: Props) => {
  return (
    <div className='rounded-xl flex shadow-lg shadow-slate-300/40 p-8  flex-col items-center text-center bg-white md:w-1/3'>
      <img src={img} alt='' />
      <h4 className='font-bold text-darkViolet-1000 mt-4 xl:text-2xl leading-relaxed'>
        {title}
      </h4>
      <p className='mt-2 xl:text-lg'>{content}</p>
    </div>
  );
};

export default FeaturesItem;
