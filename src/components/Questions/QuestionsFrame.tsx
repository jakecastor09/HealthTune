import { useState } from 'react';
import { questionData } from './Data';
import QuestionItem from './QuestionItem';

const QuestionsFrame = () => {
  const [clickedItem, setClickedItem] = useState(1);
  return (
    <div className='container mx-auto flex flex-col mt-8 space-y-2'>
      {questionData.map(data => (
        <QuestionItem
          question={data.question}
          answer={data.answer}
          onHandleClick={() => setClickedItem(data.id)}
          isOpen={data.id === clickedItem}
          key={data.id}
        />
      ))}
    </div>
  );
};

export default QuestionsFrame;
