interface Props {
  img: 1 | 2 | 3;
  styles?: string;
}
const HeroImageReview = ({ img, styles }: Props) => {
  return (
    <img
      src={`../../images/review-${img}.webp`}
      alt=''
      className={`${styles} rounded-full w-14 h-14 object-cover border-4 border-white md:w-12 md:h-12 md:border-3 `}
    />
  );
};

export default HeroImageReview;
