import { RxHamburgerMenu } from 'react-icons/rx';
import useMenuStore from '../../hooks/useMenuStore';
const NavbarMenu = () => {
  const [isMenuOpen, toggleMenu] = useMenuStore(s => [
    s.isMenuOpen,
    s.toggleMenu,
  ]);

  return (
    <div className='cursor-pointer xl:hidden' onClick={() => toggleMenu()}>
      {!isMenuOpen && <RxHamburgerMenu size='20px' />}
    </div>
  );
};

export default NavbarMenu;
