import Container from '../Container/Container';
import CareContainer from './CareContainer';
import CareOne from './CareOne/CareOne';
import CareThree from './CareThree/CareThree';
import CareTwo from './CareTwo/CareTwo';

const Care = () => {
  return (
    <Container>
      <CareContainer>
        <CareOne />
        <CareTwo />
        <CareThree />
      </CareContainer>
    </Container>
  );
};

export default Care;
