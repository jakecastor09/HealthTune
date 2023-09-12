import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const CareContainer = ({ children }: Props) => {
  return <div className='space-y-12'>{children}</div>;
};

export default CareContainer;
