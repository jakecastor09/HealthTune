import useMenuStore from '../../hooks/useMenuStore';
import { AiOutlineClose } from 'react-icons/ai';

const Menu = () => {
  const [isMenuOpen, toggleMenu] = useMenuStore(s => [
    s.isMenuOpen,
    s.toggleMenu,
  ]);
  if (!isMenuOpen) return;
  return (
    <div className='inset-0 transition-opacity duration-200  z-10 fixed bg-black opacity-80  xl:hidden'>
      <div className='flex flex-col divide-y container mx-auto mt-16  px-4 pt-8'>
        <a href='#home' className='py-4 relative z-20 text-white uppercase'>
          Home
        </a>
        <a
          href='#our-service'
          className='py-4 relative z-20 text-white uppercase'
        >
          Our Service
        </a>
        <a href='#features' className='py-4 relative z-20 text-white uppercase'>
          Features
        </a>
        <a href='#faq' className='py-4 relative z-20 text-white uppercase'>
          FAQ
        </a>
        <a
          href='#download-app'
          className='py-4 relative z-20 text-white uppercase'
        >
          Download App
        </a>
        A
      </div>
      <div
        className='flex justify-center cursor-pointer'
        onClick={() => toggleMenu()}
      >
        <AiOutlineClose color='white' size='24px' />
      </div>
    </div>
  );
};

export default Menu;
