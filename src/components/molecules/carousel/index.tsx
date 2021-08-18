import Slider from 'react-slick'
import { ContentSlider } from './styledComponents'

interface IProps {
  children: React.ReactNode;
}

export const Carousel = (props: IProps) => {
  const { children } = props;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <ContentSlider>
      <Slider {...settings}>
        {children}
      </Slider>
    </ContentSlider>
  )
};
