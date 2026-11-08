import styles from "./Definition.module.css"

function Definition() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span>ABOUT NAMSOFOOD</span>
        <h2>Who We Are?</h2>

        <p>
          NamsoFood is a food ordering and delivery platform designed to make
          discovering and ordering your favorite meals easier. We bring
          restaurants and customers together through a simple and convenient
          experience.
        </p>

        <p>
          Explore different cuisines, discover new restaurants, and enjoy your
          favorite dishes whenever you want. Great food is just a few clicks
          away!
        </p>
      </div>

      <div className={styles.sideContent}>
        <span>Good Food</span>
        <strong>Better Moments.</strong>
        <div className={styles.decoration}>✦</div>
      </div>
    </section>
  )
}

export default Definition
