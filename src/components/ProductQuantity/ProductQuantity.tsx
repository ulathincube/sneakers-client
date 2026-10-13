import styles from "./ProductQuantity.module.css"
import { PlusIcon, MinusIcon } from "@radix-ui/react-icons"

function ProductQuantity() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.group}>
        <button className={styles.subtract}>
          <MinusIcon className={styles.icon} />
        </button>
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
        <button className={styles.add}>
          <PlusIcon className={styles.icon} />
        </button>
      </div>
    </section>
  )
}

export default ProductQuantity
