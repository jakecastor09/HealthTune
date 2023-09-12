import Container from '../Container/Container';
import SatisfactionContainer from './SatisfactionContainer';
import SatisfactionItem from './SatisfactionItem';
import SatisfactionItemWithBorder from './SatisfactionItemWithBorder';

const Satisfaction = () => {
  return (
    <Container styles='bg-white'>
      <SatisfactionContainer>
        <SatisfactionItemWithBorder />
        <SatisfactionItemWithBorder />
        <SatisfactionItem />
        <SatisfactionItem />
      </SatisfactionContainer>
    </Container>
  );
};

export default Satisfaction;
