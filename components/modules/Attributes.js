import Choice from "../icons/Choice"
import Clock from "../icons/Clock"
import Fast from "../icons/Fast"
import Food from "../icons/Food"
import styles from "./Attributes.module.css"

function Attributes() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <span>WHY CHOOSE US</span>
        <h2>Why NamsoFood?</h2>
        <p>Everything you need for a better food ordering experience.</p>
      </div>

      <div className={styles.subContainer}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Fast />
          </div>
          <h3>Fast Delivery</h3>
          <p>Get your favorite meals delivered quickly.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Food />
          </div>
          <h3>Best Restaurants</h3>
          <p>Discover delicious food from great restaurants.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Choice />
          </div>
          <h3>Your Choice</h3>
          <p>Choose from a variety of meals and categories.</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Clock />
          </div>
          <h3>Available 24/7</h3>
          <p>Enjoy a convenient ordering experience anytime.</p>
        </div>
      </div>
    </section>
  )
}

export default Attributes
