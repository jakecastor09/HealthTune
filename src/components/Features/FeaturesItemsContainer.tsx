import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const FeaturesItemsContainer = ({ children }: Props) => {
  return <div className='flex flex-col gap-8 md:flex-row mt-8'>{children}</div>;
};

export default FeaturesItemsContainer;
