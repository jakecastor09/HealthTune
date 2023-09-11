import NavbarMenu from './NavbarMenu';

import NavbarButton from './NavbarButton';
import NavbarItems from './NavbarItems';
import Container from '../Container/Container';

const Navbar = () => {
  return (
    <Container>
      <div className='flex justify-between items-center'>
        <h3 className='font-bold text-darkViolet-1000'>HealthTune</h3>
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
