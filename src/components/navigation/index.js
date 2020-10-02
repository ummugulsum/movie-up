import Link from 'next/link'

import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/favorite">
        <a>Favorite</a>
      </Link>
    </nav>
  )
}

export default Navigation
