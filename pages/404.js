import Link from "next/link"
import styles from "./404.module.css"

function Custom404() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <span className={styles.number}>4</span>
          <div className={styles.foodIcon}>🍕</div>
          <span className={styles.number}>4</span>
        </div>

        <span className={styles.label}>OOPS! PAGE NOT FOUND</span>

        <h1 className={styles.title}>Looks like this page is off the menu!</h1>

        <p className={styles.description}>
          The page you're looking for may have been removed, had its name
          changed, or is temporarily unavailable. Don't worry, there's plenty of
          delicious food waiting for you!
        </p>

        <div className={styles.actions}>
          <Link href="/" className={styles.homeButton}>
            Back to Home
          </Link>

          <Link href="/menu" className={styles.menuButton}>
            Explore Menu
          </Link>
        </div>

        <p className={styles.footerText}>
          Hungry? <Link href="/menu">Find your next favorite meal.</Link>
        </p>
      </div>
    </main>
  )
}

export default Custom404
