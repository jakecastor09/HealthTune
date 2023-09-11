interface Props {
  name: string;
}
const NavbarItem = ({ name }: Props) => {
  const id = '#' + name.split(' ').join('-').toLowerCase();
  return (
    <div className='group relative'>
      <a className='navLink' href={id}>
        {name}
      </a>
      <div className='navBorderBottom'></div>
    </div>
  );
};

export default NavbarItem;
