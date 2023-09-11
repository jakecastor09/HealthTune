import NavbarMenu from './NavbarMenu';
import NavbarContainer from './NavbarContainer';
import NavbarButton from './NavbarButton';
import NavbarItems from './NavbarItems';

const Navbar = () => {
  return (
    <NavbarContainer>
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
    </NavbarContainer>
  );
};

export default Navbar;
