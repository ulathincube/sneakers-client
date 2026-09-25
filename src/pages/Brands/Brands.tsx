import Header from "../../components/Header"
import Banner from "../../components/Banner"
import Brand from "../../components/Brand"
import Footer from "../../components/Footer"
import styles from "./Brands.module.css"
import { useQuery } from "@tanstack/react-query"
import { getAllBrands } from "../../services/brand"

function Brands() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["getAllBrands"],
    queryFn: getAllBrands,
  })

  if (isPending) return <div>...Loading...</div>

  if (isError) return <div>{error.message}</div>

  return (
    <>
      <Header />
      <Banner />
      <main className={styles.wrapper}>
        <ul className={styles.brands}>
          {data.data &&
            data.data.map(({ id, name, logo }) => (
              <Brand key={id} id={id} name={name} logo={logo} />
            ))}
        </ul>
      </main>
      <Footer />
    </>
  )
}

export default Brands
