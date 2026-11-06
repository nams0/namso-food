
import styles from "./DetailsPage.module.css"
import Location from "../icons/Location"
import Dollar from "../icons/Dollar"

function DetailsPage(props) {
  const {
    id,
    name,
    price,
    discount,
    introduction,
    details,
    ingredients,
    recipe,
  } = props

  const finalPrice = discount
    ? (price * (100 - discount)) / 100
    : price

  return (
    <main className={styles.container}>
      <div className={styles.pageHeader}>
        <span>OUR MENU / FOOD DETAILS</span>
        <h2>Discover your next favorite</h2>
      </div>

      <div className={styles.subContainer}>
        {/* Food banner */}
        <section className={styles.banner}>
          <div className={styles.imageWrapper}>
            <img src={`/images/${id}.jpeg`} alt={name} />

            {discount > 0 && (
              <span className={styles.discount}>
                {discount}% OFF
              </span>
            )}
          </div>

          <div className={styles.foodInfo}>
            <span className={styles.category}>
              <Location />
              {details[0].Cuisine}
            </span>

            <h1>{name}</h1>

            <p className={styles.shortDescription}>
              Fresh ingredients, delicious taste, and
              carefully prepared just for you.
            </p>

            <div className={styles.priceContainer}>
              <div className={styles.price}>
                <Dollar />
                <span>{finalPrice.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <span className={styles.oldPrice}>
                  ${Number(price).toFixed(2)}
                </span>
              )}
            </div>

            <span className={styles.priceLabel}>
              Price per serving
            </span>
          </div>
        </section>

        {/* Introduction */}
        <section className={styles.introduction}>
          <h3>About this dish</h3>
          <p>{introduction}</p>
        </section>

        {/* Details and ingredients */}
        <div className={styles.infoGrid}>
          <section className={styles.details}>
            <h3>Food Details</h3>

            <ul>
              {details.map((detail, index) => (
                <li key={index}>
                  <span>{Object.keys(detail)[0]}</span>
                  <strong>{Object.values(detail)[0]}</strong>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.details}>
            <h3>Ingredients</h3>

            <ul className={styles.ingredientsList}>
              {ingredients.map((item, index) => (
                <li key={index}>
                  <span className={styles.check}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Recipe */}
        <section className={styles.recipe}>
          <h3>How to prepare</h3>
          <p className={styles.sectionSubtitle}>
            Follow these simple steps to make this delicious dish.
          </p>

          <div className={styles.recipeList}>
            {recipe.map((item, index) => (
              <div key={index} className={styles.recipeStep}>
                <span className={styles.stepNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Add to cart */}
        <div className={styles.cartSection}>
          <div>
            <span>Total price</span>
            <strong>${finalPrice.toFixed(2)}</strong>
          </div>

          <button className={styles.cartButton}>
            Add to Cart
            <span>+</span>
          </button>
        </div>
      </div>
    </main>
  )
}

export default DetailsPage
