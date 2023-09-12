import care1 from '../../assets/images/care-img-1.webp';
import CareBoxContainer from './CareBoxContainer';
import CareBoxItem from './CareBoxItem';
const CareContent = () => {
  return (
    <div className='md:w-1/2'>
      <div className='relative'>
        <div className='flex justify-end'>
          <img src={care1} alt='' className='w-3/4' />
        </div>
        <CareBoxContainer>
          <CareBoxItem text='Online 24/7 services' />
          <CareBoxItem text='Emergency Medicine' />
          <CareBoxItem text='Ambulance Service' />
        </CareBoxContainer>
      </div>
    </div>
  );
};

export default CareContent;
