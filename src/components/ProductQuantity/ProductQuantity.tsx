import styles from "./ProductQuantity.module.css"

function ProductQuantity() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.group}>
        <button className={styles.subtract}>-</button>
      </div>
      <div className={styles.group}>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          className={styles.field}
          id="number"
        />
      </div>
      <div className={styles.group}>
        <button className={styles.add}>+</button>
      </div>
    </section>
  )
}

export default ProductQuantity
