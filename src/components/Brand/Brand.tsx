import styles from "./Brand.module.css"
import { Link } from "react-router"

interface SneakerBrand {
  id: string
  name: string
  logo: string
}

function Brand({ id, name, logo }: SneakerBrand) {
  return (
    <li className={styles.wrapper}>
      <Link className={styles.link} to={`/brands/${id}`}>
        <img src={logo} className={styles.logo} alt={name} />
      </Link>
    </li>
  )
}

export default Brand
