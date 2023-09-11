import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const NavbarContainer = ({ children }: Props) => {
  return (
    <div className='container mx-auto px-4 pb-1 pt-10 bg-white'>{children}</div>
  );
};

export default NavbarContainer;
