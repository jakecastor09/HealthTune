import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  styles: string;
}
const CareBoxContainer = ({ children,styles }: Props) => {
  return (
    <div className={styles}>
      {children}
    </div>
  );
};

export default CareBoxContainer;
