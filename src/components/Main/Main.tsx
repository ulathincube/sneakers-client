import styles from "./Main.module.css"
import Product from "../Product"
import { useQuery } from "@tanstack/react-query"
import { getAllSneakers } from "../../services/sneaker"

function Main() {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["allSneakers"],
    queryFn: getAllSneakers,
    retry: 2,
  })

  if (isPending) return <div>...Loading...</div>
  if (isError) return <div>{error.message}</div>

  return (
    <main className={styles.wrapper}>
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
    </main>
  )
}

export default Main
