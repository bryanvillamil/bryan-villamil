import React from 'react'
import type { NextPage } from 'next'
import { es, en } from '../translations'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Header, Banner, StackTec, AboutMe, WorkExperience } from '@components'

const Home: NextPage = (props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'es' ? es : en

  console.log(t)
  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <div>
      <Head>
        <title>Bryan Villamil Acevedo</title>
        <meta name="description" content="My WebSite Bryan Villamil" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header changeLanguage={changeLanguage} locale={locale} /> 

      <Banner 
        title={t.welcomeTitle} 
        subtitle={t.welcomeSubtitle} 
        Description={t.WelcomeDescription} 
      />

      <StackTec data={t.stackTec} />

      <AboutMe />

      <WorkExperience />

    </div>
  )
}

export default Home
