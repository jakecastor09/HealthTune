import Container from '../Container/Container';
import QuestionsFrame from './QuestionsFrame';
import QuestionsTitle from './QuestionsTitle';

const Questions = () => {
  return (
    <Container styles='bg-whiteMagnolia pt-6 pb-12'>
      <QuestionsTitle />
      <QuestionsFrame />
    </Container>
  );
};

export default Questions;
