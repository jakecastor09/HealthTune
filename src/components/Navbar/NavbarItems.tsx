import NavbarItem from './NavbarItem';

const NavbarItems = () => {
  return (
    <div className='hidden items-center space-x-16 xl:flex'>
      <NavbarItem name='Home' />
      <NavbarItem name='Our Service' />
      <NavbarItem name='Features' />
      <NavbarItem name='FAQ' />
      <NavbarItem name='Download App' />
    </div>
  );
};

export default NavbarItems;
