import Container from '../Container/Container';
import FeaturesHeader from './FeaturesHeader';
import FeaturesItem from './FeaturesItem';
import FeaturesItemsContainer from './FeaturesItemsContainer';
import feature1 from '../../assets/images/feature-img-1.svg';
import feature2 from '../../assets/images/feature-img-2.svg';
import feature3 from '../../assets/images/feature-img-3.svg';

const Features = () => {
  return (
    <Container styles='py-8 pb-12'>
      <FeaturesHeader />
      <FeaturesItemsContainer>
        <FeaturesItem
          title='Always available 24/7'
          content="Access our services anytime, day or night, ensuring you're never without support."
          img={feature1}
        />
        <FeaturesItem
          title='A price that doesn’t hurt'
          content="Our pricing won't strain your budget, making quality accessible to all."
          img={feature2}
        />
        <FeaturesItem
          title='Prescriptions &  treatment plans'
          content='Receive tailored healthcare solutions designed just for you.'
          img={feature3}
        />
      </FeaturesItemsContainer>
    </Container>
  );
};

export default Features;
