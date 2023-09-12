import Container from '../Container/Container';
import ConsultHeader from './ConsultHeader';
import ConsultItem from './ConsultItem';
import ConsultItemsContainer from './ConsultItemsContainer';
import dentist from '../../assets/images/dentist.svg';
import orthopedic from '../../assets/images/orthopedic.svg';
import dermatologist from '../../assets/images/dermatologist.svg';
import cardiologist from '../../assets/images/cardiologist.svg';
import pediatricians from '../../assets/images/pediatricians.svg';
import pharmacy from '../../assets/images/pharmacy.svg';

const Consult = () => {
  return (
    <Container styles='bg-whiteMagnolia pb-12 xl:py-8 xl:pb-12'>
      <ConsultHeader />
      <ConsultItemsContainer>
        <ConsultItem imgSrc={dentist} name='Dentist' />
        <ConsultItem imgSrc={orthopedic} name='Orthopedic' />
        <ConsultItem imgSrc={dermatologist} name='Dermatologist' />
        <ConsultItem imgSrc={cardiologist} name='Cardiologist' />
        <ConsultItem imgSrc={pediatricians} name='Pediatricians' />
        <ConsultItem imgSrc={pharmacy} name='Pharmacy' />
      </ConsultItemsContainer>
    </Container>
  );
};

export default Consult;
