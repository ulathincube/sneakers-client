import styles from "./CartDetails.module.css"
import CartItem from "../CartItem"

function CartDetails() {
  return (
    <main className={styles.wrapper}>
      <section className={styles.cart}>
        <CartItem />
      </section>
      <aside className={styles.sidebar}>
        <h3 className={styles.title}>Summary</h3>
        <div className={styles.taxes}>
          <p className={styles.promo}>Do you have a promo code? </p>
          <p className={styles.subtotal}>Subtotal $55</p>
          <p className={styles.shipping}>Estimated Shipping $0.00</p>
          <p className={styles.tax}>Estimated Tax $0.00</p>
        </div>
        <div className={styles.result}>
          <p className={styles.total}>Total $55</p>
        </div>
        <div className={styles.actions}>
          <button className={styles.checkout}>Checkout</button>
          <button className={styles.paypal}>Paypal</button>
        </div>
      </aside>
    </main>
  )
}

export default CartDetails
