import styles from "./Home.module.css"
import Header from "../../components/Header"
import Categories from "../../components/Categories"
import Banner from "../../components/Banner"

function Home() {
  return (
    <>
      <Header />
      <Categories />
      <Banner />
    </>
  )
}

export default Home
