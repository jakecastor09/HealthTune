import NavbarItem from './NavbarItem';

const NavbarItems = () => {
  return (
    <div className='hidden items-center space-x-16 xl:flex'>
      <NavbarItem name='Home' />
      <NavbarItem name='Our Service' />
      <NavbarItem name='How it works' />
      <NavbarItem name='Our Doctors' />
      <NavbarItem name='Pricing Plan' />
    </div>
  );
};

export default NavbarItems;
