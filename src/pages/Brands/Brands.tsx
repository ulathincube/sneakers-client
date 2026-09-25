import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Brand from "../../components/Brand"
import Footer from "../../components/Footer"
import styles from "./Brands.module.css"

function Brands() {
  return (
    <>
      <Header />
      <Banner />
      <main className={styles.wrapper}>
        <ul className={styles.brands}>
          <Brand
            id="nike-01xx77bc"
            name="Nike"
            logo="https://t3.ftcdn.net/jpg/03/56/99/34/360_F_356993432_ZLyCoyfTSa5JOK6rkoaSstHIleu4HERh.jpg"
          />
          <Brand
            id="nike-01xx77bc"
            name="Nike"
            logo="https://t3.ftcdn.net/jpg/03/56/99/34/360_F_356993432_ZLyCoyfTSa5JOK6rkoaSstHIleu4HERh.jpg"
          />
          <Brand
            id="nike-01xx77bc"
            name="Nike"
            logo="https://t3.ftcdn.net/jpg/03/56/99/34/360_F_356993432_ZLyCoyfTSa5JOK6rkoaSstHIleu4HERh.jpg"
          />
          <Brand
            id="nike-01xx77bc"
            name="Nike"
            logo="https://t3.ftcdn.net/jpg/03/56/99/34/360_F_356993432_ZLyCoyfTSa5JOK6rkoaSstHIleu4HERh.jpg"
          />
          <Brand
            id="nike-01xx77bc"
            name="Nike"
            logo="https://t3.ftcdn.net/jpg/03/56/99/34/360_F_356993432_ZLyCoyfTSa5JOK6rkoaSstHIleu4HERh.jpg"
          />
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default Brands
