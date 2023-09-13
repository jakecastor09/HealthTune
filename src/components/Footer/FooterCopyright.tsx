import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillLinkedin,
} from 'react-icons/ai';

const FooterCopyright = () => {
  return (
    <div className='text-center py-8  md:flex md:justify-between md:items-center md:w-full md:border-t md:py-8'>
      <p className='text-xs'>Copyright @2023. All Rights Reserved.</p>
      <h3 className='mt-2 font-semibold text-sm text-darkViolet-1000 md:mt-0'>
        2023 @ HealthTune/Jake
      </h3>
      <div className='flex justify-center space-x-2 mt-4 md:mt-0'>
        <div className='bg-gray-100 p-1 rounded-sm'>
          <AiOutlineTwitter />
        </div>
        <div className='bg-gray-100 p-1 rounded-sm'>
          <AiFillFacebook />
        </div>
        <div className='bg-gray-100 p-1 rounded-sm'>
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
};

export default FooterCopyright;
