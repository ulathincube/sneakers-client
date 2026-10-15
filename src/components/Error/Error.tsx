import styles from "./Error.module.css"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"
import { motion } from "motion/react"

interface Props {
  message: string
}

function Error({ message }: Props) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.wrapper}
    >
      <article className={styles.container}>
        <div className={styles.box}>
          <ExclamationTriangleIcon className={styles.icon} />
        </div>
        <h3 className={styles.message}>{message}</h3>
      </article>
    </motion.main>
  )
}

export default Error
