import styles from "./Sneaker.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getSneaker } from "../../services/sneaker"
import { StarFilledIcon, BackpackIcon, HeartIcon } from "@radix-ui/react-icons"

function Sneaker() {
  const { sneakerId } = useParams()

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["getSneaker", sneakerId],
    queryFn: () => getSneaker(sneakerId!),
  })

  const onButtonClick = () => {}

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
            <ul className={styles.stars}>
              <li className={styles.star}>
                <StarFilledIcon className={styles.icon} />
              </li>
              <li className={styles.star}>
                <StarFilledIcon className={styles.icon} />
              </li>
              <li className={styles.star}>
                <StarFilledIcon className={styles.icon} />
              </li>
              <li className={styles.star}>
                <StarFilledIcon className={styles.icon} />
              </li>
              <li className={styles.star}>
                <StarFilledIcon className={styles.icon} />
              </li>
            </ul>
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
            <button className={styles.add}>
              <span className={styles.text}>Add to Cart</span>
              <span className={styles.box}>
                <BackpackIcon className={styles.icon} />
              </span>
            </button>
            <button className={styles.favourite}>
              <span className={styles.text}>Favourite</span>
              <span className={styles.box}>
                <HeartIcon className={styles.icon} />
              </span>
            </button>
          </section>
        </aside>
      </main>
      <Footer />
    </>
  )
}

export default Sneaker
