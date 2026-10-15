import styles from "./DesktopProduct.module.css"
import { HeartIcon, StarFilledIcon, BackpackIcon } from "@radix-ui/react-icons"
import { Link } from "react-router"
import { motion } from "motion/react"

interface Picture {
  id: string
  url: string
}

interface Props {
  pictures: Picture[]
  name: string
  price: number
  gender: string
  onChangeGender: (gender: string) => void
  size: string
  onChangeSize: (size: string) => void
  onAddToWishlist: () => void
  onAddToCart: () => void
}

function DesktopProduct({
  pictures,
  name,
  price,
  gender,
  onChangeGender,
  size,
  onChangeSize,
  onAddToCart,
  onAddToWishlist,
}: Props) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <article className={styles.container}>
        <ul className={styles.images}>
          {pictures.map((pictureObject) => (
            <li key={pictureObject.id} className={styles.item}>
              <img
                className={styles.image}
                src={pictureObject.url}
                alt={name}
              />
            </li>
          ))}
        </ul>
      </article>
      <aside className={styles.sidebar}>
        <section className={styles.details}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.category}>{name}</p>
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
          <p className={styles.price}>${price}</p>
          <div className={styles.options}>
            <h4 className={styles.gender}>Select Gender</h4>
            <div className={styles.actions}>
              <div className={styles.grouping}>
                <label htmlFor="mens">Mens</label>
                <input
                  required={true}
                  className={styles.radio}
                  type="radio"
                  value="mens"
                  id="mens"
                  checked={gender === "mens"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeGender(event.target.value)
                  }}
                />
              </div>
              <div className={styles.grouping}>
                <label htmlFor="womens">Womens</label>
                <input
                  required={true}
                  className={styles.radio}
                  type="radio"
                  value="womens"
                  id="womens"
                  checked={gender === "womens"}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    onChangeGender(event.target.value)
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
                onChange={(event) => onChangeSize(event.target.value)}
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
                onChange={(event) => onChangeSize(event.target.value)}
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
                onChange={(event) => onChangeSize(event.target.value)}
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
                onChange={(event) => onChangeSize(event.target.value)}
              />
            </div>
          </div>
        </div>
        <section className={styles.actions}>
          <button onClick={onAddToCart} className={styles.add}>
            <span className={styles.text}>Add to Cart</span>
            <span className={styles.box}>
              <BackpackIcon className={styles.icon} />
            </span>
          </button>
          <button onClick={onAddToWishlist} className={styles.favourite}>
            <span className={styles.text}>Favourite</span>
            <span className={styles.box}>
              <HeartIcon className={styles.icon} />
            </span>
          </button>
        </section>
      </aside>
    </motion.main>
  )
}

export default DesktopProduct
