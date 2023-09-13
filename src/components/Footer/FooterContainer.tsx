import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const FooterContainer = ({ children }: Props) => {
  return (
    <div className='flex flex-col divide-y md:flex-row md:divide-y-0 md:mb-8 md:gap-2'>
      {children}
    </div>
  );
};

export default FooterContainer;
