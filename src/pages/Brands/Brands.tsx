import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import styles from "./Brands.module.css"

function Brands() {
  return (
    <>
      <Header />
      <Banner />
      <main className={styles.wrapper}>
        <ul className={styles.brands}></ul>
      </main>
      <Footer />
    </>
  )
}

export default Brands
