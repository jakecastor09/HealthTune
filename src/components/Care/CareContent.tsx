import CareBoxContainer from './CareBoxContainer';
import CareBoxItem from './CareBoxItem';
import { CareContentData } from './CareOne/data';

interface Props {
  careContentData: CareContentData;
  styles: string;
  boxContainerStyles: string;
}
const CareContent = ({
  careContentData,
  styles,
  boxContainerStyles,
}: Props) => {
  return (
    <div className='md:w-1/2'>
      <div className='relative'>
        <div className={styles}>
          <img src={careContentData.img} alt='' className='w-3/4' />
        </div>
        <CareBoxContainer styles={boxContainerStyles}>
          <CareBoxItem text={careContentData.item1} />
          <CareBoxItem text={careContentData.item2} />
          <CareBoxItem text={careContentData.item3} />
        </CareBoxContainer>
      </div>
    </div>
  );
};

export default CareContent;
