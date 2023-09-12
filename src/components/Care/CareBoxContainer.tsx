import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const CareBoxContainer = ({ children }: Props) => {
  return (
    <div className='rounded-xl top-8 absolute bg-white shadow-md p-4 text-sm space-y-2 lg:p-8 md:top-4 md:-left-6 xl:top-20 xl:left-12'>
      {children}
    </div>
  );
};

export default CareBoxContainer;
