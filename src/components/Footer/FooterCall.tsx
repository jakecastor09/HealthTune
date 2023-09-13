import { MdCall, MdEmail } from 'react-icons/md';

const FooterCall = () => {
  return (
    <div className='pb-8 pt-4 md:w-1/3 md:pb-0 md:pt-0'>
      <h3 className='text-sm font-bold uppercase text-darkViolet-1000'>
        HealthTune
      </h3>
      <div className='flex items-center space-x-2 mt-4'>
        <MdCall />
        <p>+117824641616</p>
      </div>
      <div className='flex items-center space-x-2 mt-1'>
        <MdEmail />
        <p>healthtune@gmail.com</p>
      </div>
    </div>
  );
};

export default FooterCall;
