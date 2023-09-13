import Container from '../Container/Container';
import QuestionsFrame from './QuestionsFrame';
import QuestionsTitle from './QuestionsTitle';

const Questions = () => {
  return (
    <div id='faq'>
      <Container styles='bg-whiteMagnolia pt-6 pb-12'>
        <div className='xl:mx-auto xl:max-w-5xl'>
          <QuestionsTitle />
          <QuestionsFrame />
        </div>
      </Container>
    </div>
  );
};

export default Questions;
