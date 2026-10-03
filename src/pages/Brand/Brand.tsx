import styles from "./Brand.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Product from "../../components/Product"
import { getBrandProducts } from "../../services/brand"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router"

function Brand() {
  const { brandId } = useParams()

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["sneakers", brandId],
    queryFn: () => getBrandProducts(brandId!),
  })

  if (isPending) return <div>...Loading...</div>
  if (isError) return <div>{error.message}</div>

  console.log({ data, brandId })

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <ul className={styles.products}>
          {data.data.sneakers.map((sneakerObject) => (
            <Product
              key={sneakerObject.id}
              id={sneakerObject.id}
              url={sneakerObject.pictures[0].url}
              name={sneakerObject.name}
              category={sneakerObject.name}
              price={sneakerObject.price}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default Brand
