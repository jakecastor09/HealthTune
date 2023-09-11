interface Props {
  name: string;
}
const NavbarItem = ({ name }: Props) => {
  return (
    <div className='group relative'>
      <a className='navLink'>{name}</a>
      <div className='navBorderBottom'></div>
    </div>
  );
};

export default NavbarItem;
