import styles from "./DesktopProduct.module.css"
import { HeartIcon, StarFilledIcon, BackpackIcon } from "@radix-ui/react-icons"
import { Link } from "react-router"
import { motion } from "motion/react"

const shoeSizes: number[] = [
  6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 13, 14, 15, 16,
  17, 18,
]

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
            {shoeSizes.map((shoeSize) => (
              <div key={shoeSize} className={styles.group}>
                <label className={styles.label} htmlFor={`size${shoeSize}`}>
                  {shoeSize}
                </label>
                <input
                  className={styles.field}
                  type="radio"
                  name="size"
                  id={`size${shoeSize}`}
                  value={shoeSize}
                  checked={size === `${shoeSize}`}
                  onChange={(event) => onChangeSize(event.target.value)}
                />
              </div>
            ))}
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
