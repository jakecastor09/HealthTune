import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles?: string;
}
const Container = ({ children, styles }: Props) => {
  return (
    <div className={`${styles}`}>
      <div className='container mx-auto px-4 pb-1 pt-8'>{children}</div>
    </div>
  );
};

export default Container;
