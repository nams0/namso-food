import Link from "next/link"
import styles from "./Layout.module.css"
import Github from "../icons/Github"

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">
            Namso<span>Food</span>
          </Link>
        </div>
        <div className={styles.right}>
          <Link href="/menu">Menu</Link>
          <Link href="/categories">Categories</Link>
        </div>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/nams0" target="_blank" rel="noreferrer">
          <Github /> Namso
        </a>{" "}
        | NamsoFood Project &copy;
      </footer>
    </>
  )
}

export default Layout
