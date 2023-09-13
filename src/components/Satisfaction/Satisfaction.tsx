import Container from '../Container/Container';
import SatisfactionContainer from './SatisfactionContainer';
import SatisfactionItem from './SatisfactionItem';

const Satisfaction = () => {
  return (
    <div id='our-service'>
      <Container styles='bg-white'>
        <SatisfactionContainer>
          <SatisfactionItem number={50} text='Country Coverage' border={true} />
          <SatisfactionItem
            number={800}
            text='Clieny Satisfaction'
            border={true}
          />
          <SatisfactionItem number={100} text='Expert Consultant' />
          <SatisfactionItem number={250} text='Clieny Satisfaction' />
        </SatisfactionContainer>
      </Container>
    </div>
  );
};

export default Satisfaction;
