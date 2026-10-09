import styles from "./Sneaker.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { getSneaker } from "../../services/sneaker"
import { StarFilledIcon, BackpackIcon, HeartIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import MobileProduct from "../../components/MobileProduct"
import { Link } from "react-router"

function Sneaker() {
  const { sneakerId } = useParams()
  const [size, setSize] = useState<string>()
  const [gender, setGender] = useState<string>()

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
            <p className={styles.category}>{data.data.name}</p>
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
            <div className={styles.options}>
              <h4 className={styles.gender}>Select Gender</h4>
              <div className={styles.actions}>
                <div className={styles.grouping}>
                  <label htmlFor="mens">Mens</label>
                  <input
                    className={styles.radio}
                    type="radio"
                    value="mens"
                    id="mens"
                    checked={gender === "mens"}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setGender(event.target.value)
                    }}
                  />
                </div>
                <div className={styles.grouping}>
                  <label htmlFor="womens">Womens</label>
                  <input
                    className={styles.radio}
                    type="radio"
                    value="womens"
                    id="womens"
                    checked={gender === "womens"}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setGender(event.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <div className={styles.sizing}>
            <article className={styles.prompts}>
              <h4 className={styles.heading}>Select Size</h4>
              <div>
                <Link className={styles.link} to="/">
                  Size Guide
                </Link>
              </div>
            </article>
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
      <main className={styles.mobile}>
        <MobileProduct
          price={data.data.price}
          product={data.data.name}
          images={data.data.pictures}
        />
      </main>
      <Footer />
    </>
  )
}

export default Sneaker
