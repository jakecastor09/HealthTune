import Container from '../Container/Container';
import { MdArrowForwardIos } from 'react-icons/md';
import { AiOutlinePlayCircle, AiFillStar } from 'react-icons/ai';
import HeroImageReview from './HeroImageReview';
import mobileScreen from '../../assets/images/mobile-screen-xl.png';
const HeroSection = () => {
  return (
    <Container styles='bg-whiteFloral'>
      <div id='home' className='text-center mt-2'>
        <h3 className='font-semibold text-darkViolet-1000'>
          We are Now online 24/7
        </h3>
        <h1 className='mt-4 font-extrabold leading-snug text-4xl text-darkViolet-1000 max-w-sm mx-auto md:max-w-lg md:text-40 xl:text-6xl xl:max-w-3xl xl:leading-snug'>
          Access expert medical advice through our app
        </h1>
        <p className='text-darkViolet-300 mt-4 max-w-xs mx-auto md:leading-relaxed md:max-w-sm xl:text-xl xl:max-w-lg xl:leading-relaxed'>
          Experience healthcare convenience with our app. Connect to skilled
          medical professionals for expert support anytime you need it.
        </p>
        {/* //? Button */}
        <div className='flex flex-col items-center max-w-sm mx-auto space-x-4 mt-5 md:flex-row'>
          <button className='bg-darkViolet-1000 text-white rounded-full flex items-center  px-12 py-5 font-bold hover:opacity-70'>
            Download Now
            <span className='ml-2'>
              <MdArrowForwardIos />
            </span>
          </button>
          <div className='flex space-x-2 items-center mt-6 md:mt-0'>
            <AiOutlinePlayCircle size='24px' />
            <h3 className='text-darkViolet-1000 font-bold'>Watch Demo</h3>
          </div>
        </div>
        {/* //? Review */}
        <div className='max-w-xs flex flex-col items-center justify-center mt-10 mx-auto md:flex-row md:max-w-md md:space-x-1'>
          <div className='flex justify-center w-20px'>
            <HeroImageReview img={1} styles={'translate-x-4'} />
            <HeroImageReview img={2} styles={'-translate-x-0'} />
            <HeroImageReview img={3} styles={'-translate-x-4'} />
          </div>
          <div className='flex flex-col mt-3 space-y-1 md:space-y-0 md:mt-0 mx-auto'>
            <h3 className='text-darkViolet-1000 text-center mx-auto  font-semibold  flex items-center md:text-left md:mx-0 md:text-sm xl:text-md'>
              <span className='mr-2'>
                <AiFillStar color='orange' size='20px' />
              </span>
              4.9 (5k+ reviews)
            </h3>
            <p className='text-darkViolet-300 md:text-sm xl:text-md'>
              Our Most Happy customers
            </p>
          </div>
        </div>
        {/* //? Preview App */}
        <div className='mt-12 max-w-sm mx-auto md:max-w-md lg:max-w-xl'>
          <img src={mobileScreen} alt='' />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
