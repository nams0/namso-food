import SpaceX from "../icons/SpaceX"
import Tesla from "../icons/Tesla"
import Apple from "../icons/Apple"
import Binance from "../icons/Binance"
import styles from "./Companies.module.css"

function Companies() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <span>OUR NETWORK</span>
        <h2>Our Trusted Partners</h2>
      </div>

      <div className={styles.logoContainer}>
        <div>
          <Apple />
        </div>
        <div>
          <SpaceX />
        </div>
        <div>
          <Binance />
        </div>
        <div>
          <Tesla />
        </div>
      </div>
    </section>
  )
}

export default Companies
