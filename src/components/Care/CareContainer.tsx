import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const CareContainer = ({ children }: Props) => {
  return (
    <div className='flex pb-12 flex-col items-center md:space-x-2 md:flex-row-reverse'>
      {children}
    </div>
  );
};

export default CareContainer;
