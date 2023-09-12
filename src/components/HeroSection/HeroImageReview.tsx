import review1 from '../../assets/images/review-1.webp';
import review2 from '../../assets/images/review-2.webp';
import review3 from '../../assets/images/review-3.webp';

interface Props {
  img: 1 | 2 | 3;
  styles?: string;
}
const HeroImageReview = ({ img, styles }: Props) => {
  const images: { [key in 1 | 2 | 3]: string } = {
    1: review1,
    2: review2,
    3: review3,
  };
  return (
    <img
      src={images[img]}
      alt=''
      className={`${styles} rounded-full w-14 h-14 object-cover border-4 border-white md:w-12 md:h-12 md:border-3 `}
    />
  );
};

export default HeroImageReview;
