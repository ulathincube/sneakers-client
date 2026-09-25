import styles from "./NotFound.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router"

function NotFound() {
  return (
    <>
      <Header />
      <article className={styles.wrapper}>
        <h2 className={styles.title}>
          Hello! This page does not currently exist
        </h2>
        <p className={styles.details}>Sorry! Try maybe a different route</p>
        <div className={styles.container}>
          <Link to="/" className={styles.link}>
            Go back Home
          </Link>
        </div>
      </article>
      <Footer />
    </>
  )
}

export default NotFound
