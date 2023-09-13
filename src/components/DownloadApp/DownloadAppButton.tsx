import { BiLogoPlayStore } from 'react-icons/bi';
import { BsApple } from 'react-icons/bs';
const DownloadAppButton = () => {
  return (
    <div className='lg:max-w-sm xl:max-w-xl'>
      <div className='mt-6 rounded-full border border-darkViolet-1000 flex p-2 '>
        <input
          type='number'
          placeholder='Enter phone number'
          className='rounded-full p-2 flex-1 focus:outline-none'
        />
        <button className='text-white text-bold bg-darkViolet-1000 py-3 w-2/3 lg:w-1/3 rounded-full'>
          Send
        </button>
      </div>
      <div className='flex item-center justify-between mt-12 space-x-4'>
        <button className='bg-whiteFloral flex items-center space-x-1  rounded-full hover:outline hover:ouline-0 hover:outline-darkViolet-600 py-2 w-1/2 justify-center'>
          <BiLogoPlayStore size='20px' />
          <div className='flex flex-col'>
            <div className='text-xs translate-y-1 font-bold text-left text-darkViolet-1000'>
              Get it on
            </div>
            <h4 className='font-semibold text-darkViolet-1000'>Google Play</h4>
          </div>
        </button>
        <button className='bg-whiteFloral flex items-center space-x-1  rounded-full hover:outline hover:ouline-0 hover:outline-darkViolet-600 py-2 w-1/2 justify-center'>
          <BsApple size='20px' />
          <div className='flex flex-col items-start'>
            <div className='text-xs translate-y-1 font-bold text-left text-darkViolet-1000'>
              Download on it
            </div>
            <h4 className='font-semibold text-darkViolet-1000'>App Store</h4>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DownloadAppButton;
