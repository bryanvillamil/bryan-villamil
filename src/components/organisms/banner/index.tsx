import Image from 'next/image'
import { ContentBanner, BannerImg, BannerText } from "./styledComponents";

interface TitleProps {
  title: string;
  subtitle: string;
  Description: any;
}

export const Banner = (props: TitleProps) => {
  console.log(props)
  const {
    title,
    subtitle,
    Description
  } = props;
  return (
    <ContentBanner>
      <BannerImg>
        <Image src="/images/banner.jpg" alt="banner" layout="fill" objectFit="cover" objectPosition="center" />
      </BannerImg>

      <BannerText>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <Description />
      </BannerText>
    </ContentBanner>
  );
};