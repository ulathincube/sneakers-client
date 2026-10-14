import styles from "./Main.module.css"
import Product from "../Product"
import { useQuery } from "@tanstack/react-query"
import { getAllSneakers } from "../../services/sneaker"
import { motion } from "motion/react"

interface Props {
  title: string
}

function Main({ title }: Props) {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["allSneakers"],
    queryFn: getAllSneakers,
    retry: 2,
  })

  if (isPending) return <div>...Loading...</div>
  if (isError) return <div>{error.message}</div>

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <ul className={styles.products}>
        {data.data.map((sneakerObject) => (
          <Product
            key={sneakerObject.id}
            id={sneakerObject.id}
            url={sneakerObject.pictures[0].url}
            name={sneakerObject.name}
            price={sneakerObject.price}
            category={sneakerObject.name}
          />
        ))}
      </ul>
    </motion.main>
  )
}

export default Main
