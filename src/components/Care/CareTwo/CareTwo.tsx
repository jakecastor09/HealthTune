import CareContent from '../CareContent';
import CareHeader from '../CareHeader';
import CareContainerTwo from './CareContainerTwo';
import { careContentData, careHeaderData } from './data';
const CareTwo = () => {
  return (
    <CareContainerTwo>
      <CareContent
        styles='flex'
        careContentData={careContentData}
        boxContainerStyles='rounded-xl top-8 right-0 absolute bg-white shadow-md p-4 text-sm space-y-2 lg:p-8 md:top-0 md:right-2 xl:top-20 xl:right-12'
      />
      <CareHeader careHeaderData={careHeaderData} />
    </CareContainerTwo>
  );
};

export default CareTwo;
