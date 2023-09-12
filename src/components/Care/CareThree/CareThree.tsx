import CareContent from '../CareContent';
import CareHeader from '../CareHeader';
import CareContainerOne from '../CareOne/CareContainerOne';
import { careContentData, careHeaderData } from './data';

const CareContainerThree = () => {
  return (
    <CareContainerOne>
      <CareContent
        boxContainerStyles='rounded-xl top-8 absolute bg-white shadow-md p-4 text-sm space-y-2 lg:p-8 md:top-4 md:-left-6 xl:top-20 xl:left-12'
        styles='flex justify-end'
        careContentData={careContentData}
      />
      <CareHeader careHeaderData={careHeaderData} />
    </CareContainerOne>
  );
};

export default CareContainerThree;
