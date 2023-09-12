import Container from '../Container/Container';
import CareContainer from './CareContainer';
import CareContent from './CareContent';
import CareHeader from './CareHeader';

const Care = () => {
  return (
    <Container>
      <CareContainer>
        <CareContent />
        <CareHeader />
      </CareContainer>
    </Container>
  );
};

export default Care;
