import NavbarMenu from './NavbarMenu';

import Container from '../Container/Container';
import NavbarButton from './NavbarButton';
import NavbarItems from './NavbarItems';
import useMenuStore from '../../hooks/useMenuStore';

const Navbar = () => {
  const isMenuOpen = useMenuStore(s => s.isMenuOpen);

  return (
    <Container styles=' bg-white pb-1 '>
      <div className='flex justify-between items-center pb-4 xl:py-0'>
        <h3
          className={`font-bold ${
            isMenuOpen ? 'text-white' : 'text-darkViolet-1000'
          } relative z-50`}
        >
          HealthTune
        </h3>
        <div className='flex items-center space-x-4 xl:hidden'>
          <h3 className='hidden text-darkViolet font-semibold md:block '>
            Sign in
          </h3>
          <NavbarMenu />
        </div>
        <NavbarItems />
        <NavbarButton />
      </div>
    </Container>
  );
};

export default Navbar;
