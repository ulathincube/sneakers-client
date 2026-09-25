import styles from "./Sneaker.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

function Sneaker() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <article className={styles.container}>
          <ul className={styles.images}>
            <li className={styles.item}>
              <img
                src="/assets/images/nike-sneakers.webp"
                className={styles.image}
              />
            </li>
            <li className={styles.item}>
              <img
                src="/assets/images/nike-sneakers.webp"
                className={styles.image}
              />
            </li>
            <li className={styles.item}>
              <img
                src="/assets/images/nike-sneakers.webp"
                className={styles.image}
              />
            </li>
            <li className={styles.item}>
              <img
                src="/assets/images/nike-sneakers.webp"
                className={styles.image}
              />
            </li>
          </ul>
        </article>
        <aside className={styles.sidebar}>
          <section className={styles.details}>
            <h3 className={styles.title}>Nike Sneakers</h3>
            <p className={styles.text}>Men's Shoes</p>
            <p className={styles.price}>$150</p>
          </section>
          <section className={styles.sizes}>
            <button className={styles.size}>6</button>
            <button className={styles.size}>7</button>
            <button className={styles.size}>8</button>
            <button className={styles.size}>9</button>
            <button className={styles.size}>10</button>
            <button className={styles.size}>11</button>
            <button className={styles.size}>12</button>
            <button className={styles.size}>13</button>
          </section>
          <section className={styles.actions}>
            <button className={styles.add}>Add to Bag</button>
            <button className={styles.favourite}>Favourite</button>
          </section>
        </aside>
      </main>
      <Footer />
    </>
  )
}

export default Sneaker
