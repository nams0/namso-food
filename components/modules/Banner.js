import Link from "next/link"
import styles from "./Banner.module.css"

function Banner() {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <span className={styles.eyebrow}>DELICIOUS FOOD, DELIVERED</span>

        <h1>
          Enjoy Your Favorite
          <span> Food Anytime!</span>
        </h1>

        <p className={styles.subtitle}>Food Delivery and Takeout!</p>

        <p className={styles.description}>
          NamsoFood makes ordering your favorite meals simple. Discover great
          restaurants, explore delicious dishes, and enjoy convenient food
          delivery right at your door.
        </p>

        <div className={styles.actions}>
          <Link href="/menu" className={styles.primaryButton}>
            Explore Menu
            <span>→</span>
          </Link>

          <Link href="/categories" className={styles.secondaryButton}>
            Browse Categories
          </Link>
        </div>

        <div className={styles.highlights}>
          <div>
            <strong>Fresh</strong>
            <span>Quality meals</span>
          </div>

          <div>
            <strong>Fast</strong>
            <span>Quick delivery</span>
          </div>

          <div>
            <strong>Easy</strong>
            <span>Simple ordering</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.imageBackground}></div>
        <img src="/images/banner.png" alt="Delicious food" />

        <div className={styles.floatingCard}>
          <span className={styles.foodIcon}>✦</span>
          <div>
            <strong>Good Food, Good Mood!</strong>
            <span>Discover something delicious.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
