import { CareHeaderData } from './CareOne/data';

interface Props {
  careHeaderData: CareHeaderData;
}
const CareHeader = ({ careHeaderData }: Props) => {
  return (
    <div className='mt-12 md:w-1/2 md:mt-0'>
      <h1 className='text-darkViolet-1000 font-extrabold text-3xl leading-relaxed lg:max-w-sm lg:leading-relaxed xl:text-5xl xl:max-w-md xl:leading-relaxed'>
        {careHeaderData.title}
      </h1>
      <p className='mt-4 leading-relaxed lg:max-w-sm lg:leading-relaxed xl:text-lg xl:max-w-lg'>
        {careHeaderData.p1}
      </p>
      <p className='mt-4 leading-relaxed lg:max-w-sm lg:leading-relaxed xl:text-lg xl:max-w-lg'>
        {careHeaderData.p2}
      </p>
    </div>
  );
};

export default CareHeader;
