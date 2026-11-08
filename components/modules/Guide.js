import Link from "next/link"
import styles from "./Guide.module.css"

function Guide() {
  return (
    <section className={styles.container}>
      <Link href="/menu" className={`${styles.card} ${styles.menu}`}>
        <span className={styles.icon}>🍽️</span>
        <div>
          <h3>Explore Menu</h3>
          <p>Discover delicious meals.</p>
        </div>
        <span className={styles.arrow}>→</span>
      </Link>

      <Link
        href="/categories"
        className={`${styles.card} ${styles.categories}`}
      >
        <span className={styles.icon}>🥗</span>
        <div>
          <h3>Categories</h3>
          <p>Find food you love.</p>
        </div>
        <span className={styles.arrow}>→</span>
      </Link>

      <Link href="/" className={`${styles.card} ${styles.discount}`}>
        <span className={styles.icon}>🎁</span>
        <div>
          <h3>Special Offers</h3>
          <p>Discover available discounts.</p>
        </div>
        <span className={styles.arrow}>→</span>
      </Link>
    </section>
  )
}

export default Guide
