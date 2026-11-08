import styles from "./Instruction.module.css"

const steps = [
  "Sign in or create an account and set your delivery address.",
  "Choose the restaurant you want to order from.",
  "Select your favorite items and add them to your cart.",
  "Review your selected items in the shopping cart.",
  "Confirm your details and place your order.",
  "Track your order progress until it arrives.",
]

function Instruction() {
  return (
    <section className={styles.container}>
      <div className={styles.heading}>
        <span>SIMPLE PROCESS</span>
        <h2>How to Order?</h2>
        <p>Enjoy your favorite food in just a few easy steps.</p>
      </div>

      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div className={styles.step} key={index}>
            <span className={styles.number}>
              {String(index + 1).padStart(2, "0")}
            </span>

            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Instruction
