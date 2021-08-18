import Image from 'next/image'
import { LanguageSection } from "@components"
import { ContentHeader, HeaderContainer, HeaderLogo } from "./styledComponents";

interface PropsHeader {
  changeLanguage: (locale:'en' | 'es') => void;
  locale?: string
}

export const Header = (props: PropsHeader) => {
  const { 
    changeLanguage,
    locale
  } = props;

  return (
    <ContentHeader>
      <HeaderContainer>
        <HeaderLogo>
          <Image src="/images/logo.png" alt="logo" width={50} height={40} objectFit="cover" />
        </HeaderLogo>
        <LanguageSection changeLanguage={changeLanguage} locale={locale} />
      </HeaderContainer>
    </ContentHeader>
  );
};
