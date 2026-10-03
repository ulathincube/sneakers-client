import styles from "./Sneaker.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getSneaker } from "../../services/sneaker"

function Sneaker() {
  const { sneakerId } = useParams()

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["getSneaker", sneakerId],
    queryFn: () => getSneaker(sneakerId!),
  })

  if (isPending) return <div>...Loading...</div>
  if (isError) return <div>{error.message}</div>

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <article className={styles.container}>
          <ul className={styles.images}>
            {data.data.pictures.map((pictureObject) => (
              <li key={pictureObject.id} className={styles.item}>
                <img
                  className={styles.image}
                  src={pictureObject.url}
                  alt={data.data.name}
                />
              </li>
            ))}
          </ul>
        </article>
        <aside className={styles.sidebar}>
          <section className={styles.details}>
            <h3 className={styles.title}>{data.data.name}</h3>
            <p className={styles.text}>{data.data.name}</p>
            <p className={styles.price}>${data.data.price}</p>
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
