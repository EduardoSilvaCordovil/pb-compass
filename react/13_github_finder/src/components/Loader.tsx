import classes from "./Loader.module.css"
import { FaSpinner } from "react-icons/fa"

const Loader = () => {
  return (
    <div>
      <FaSpinner className={classes.loader} />
    </div>
  )
}

export default Loader