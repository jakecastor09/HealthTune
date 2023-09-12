import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const CareContainerTwo = ({ children }: Props) => {
  return (
    <div className='flex mt-8 pb-12 flex-col items-center md:space-x-2 md:flex-row'>
      {children}
    </div>
  );
};

export default CareContainerTwo;
