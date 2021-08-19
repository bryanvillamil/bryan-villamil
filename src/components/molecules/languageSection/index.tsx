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
        <Button className={locale==='es' ? 'active' : ''} onClick={() => changeLanguage('es')}>
          <Image src="/images/img-espanol.png" alt="Es" width={18} height={18} />
        </Button>
        |
        <Button className={locale==='en' ? 'active' : ''} onClick={() => changeLanguage('en')}>
          <Image src="/images/img-ingles.png" alt="Es" width={18} height={18} />
        </Button>
    </Language>
  )
}

// active={locale==='es'} active={locale==='en'}
