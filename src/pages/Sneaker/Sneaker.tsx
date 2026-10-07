import styles from "./Sneaker.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getSneaker } from "../../services/sneaker"
import { StarFilledIcon, BackpackIcon, HeartIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import MobileProduct from "../../components/MobileProduct"

function Sneaker() {
  const { sneakerId } = useParams()
  const [size, setSize] = useState<string>()

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
          <div className={styles.sizes}>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="size-06">
                6
              </label>
              <input
                className={styles.field}
                type="radio"
                name="size"
                id="size-06"
                value="6"
                checked={size === "6"}
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="size-07">
                7
              </label>
              <input
                className={styles.field}
                type="radio"
                name="size"
                id="size-07"
                value="7"
                checked={size === "7"}
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="size-08">
                8
              </label>
              <input
                className={styles.field}
                type="radio"
                name="size"
                id="size-08"
                value="8"
                checked={size === "8"}
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
            <div className={styles.group}>
              <label className={styles.label} htmlFor="size-09">
                9
              </label>
              <input
                className={styles.field}
                type="radio"
                name="size"
                id="size-09"
                value="9"
                checked={size === "9"}
                onChange={(event) => setSize(event.target.value)}
              />
            </div>
          </div>
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
      <main className={styles.mobile}></main>
      <Footer />
    </>
  )
}

export default Sneaker
