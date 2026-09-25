import styles from "./Home.module.css"
import Header from "../../components/Header"
import Categories from "../../components/Categories"
import Banner from "../../components/Banner"
import Main from "../../components/Main"
import Footer from "../../components/Footer"

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Banner />
      <Main />
      <Footer />
    </>
  )
}

export default Home
