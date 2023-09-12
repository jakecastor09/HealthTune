interface Props {
  name: string;
  imgSrc: string;
}
const ConsultItem = ({ imgSrc, name }: Props) => {
  return (
    <div className='shadow-sm rounded-3xl p-8 bg-white flex space-y-4 flex-col items-center hover:outline-darkViolet-1000 hover:outline duration-100'>
      <div className='w-16 h-16 p-4  rounded-full bg-whiteMagnolia flex justify-center'>
        <img src={imgSrc} alt='' />
      </div>
      <h3 className='text-darkViolet-1000 font-bold '>{name}</h3>
    </div>
  );
};

export default ConsultItem;
