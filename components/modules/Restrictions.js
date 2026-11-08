import styles from "./Restrictions.module.css"

function Restrictions() {
  return (
    <section className={styles.container}>
      <div className={styles.icon}>!</div>

      <div className={styles.content}>
        <h2>Important Information</h2>

        <p>
          Merchants may only offer items expressly permitted by their agreements
          with the platform. Specially regulated or prohibited products,
          including certain controlled substances, cannot be offered through the
          food menu.
        </p>
      </div>
    </section>
  )
}

export default Restrictions
