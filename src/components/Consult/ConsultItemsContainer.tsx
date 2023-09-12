import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const ConsultItemsContainer = ({ children }: Props) => {
  return (
    <div className='grid gap-4 grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:gap-6 xl:gap-8 xl:grid-cols-6 xl:grid-rows-1'>
      {children}
    </div>
  );
};

export default ConsultItemsContainer;
