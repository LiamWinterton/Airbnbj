import Head from 'next/head'

import Logo from '../components/Logo/Logo'
import Navigation from '../components/Navigation/Navigation'
import Menu from '../components/Menu/Menu'

import styles from "../styles/Home.module.scss"

export default function Home() {
  return (
    <div id="airbnbj">
      <Head>
        <title>Airbnbj | Travel, with a naughty twist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.header__top}>
          <div className={styles.container}>
            <a href="#">Get the latest on our COVID-19 response</a>
          </div>
        </div>
        <div className={styles.header__bottom}>
          <div className={styles.container}>
            <Logo />
            <Navigation />
            <Menu />
          </div>
        </div>
      </header>
    </div>
  )
}
