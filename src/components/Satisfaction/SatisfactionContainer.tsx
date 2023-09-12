import { ReactNode } from 'react';
interface Props {
  children: ReactNode;
}
const SatisfactionContainer = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-2 gap-y-4 place-items-center  pb-6 md:grid-cols-4 md:gap-y-0 md:divide-x md:text-center'>
      {children}
    </div>
  );
};

export default SatisfactionContainer;
