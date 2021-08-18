import { Language, Button } from './styledComponents'
import Image from 'next/image'

interface PropsLanguage {
  changeLanguage: (locale:'en' | 'es') => void;
  locale?: string
}

export const LanguageSection = (props: PropsLanguage) => {
  const { changeLanguage, locale } = props;
  return (
    <Language>
        <Button active={locale==='es'} onClick={() => changeLanguage('es')}>
          <Image src="/images/img-espanol.png" alt="Es" width={18} height={18} />
        </Button>
        |
        <Button active={locale==='en'} onClick={() => changeLanguage('en')}>
          <Image src="/images/img-ingles.png" alt="Es" width={18} height={18} />
        </Button>
    </Language>
  )
}
