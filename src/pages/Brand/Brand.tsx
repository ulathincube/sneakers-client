import styles from "./Brand.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Product from "../../components/Product"

function Brand() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <ul className={styles.products}>
          <Product />
          <Product />
          <Product />
          <Product />
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default Brand
