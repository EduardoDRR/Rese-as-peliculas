import { ImSpinner2} from 'react-icons/im'
import styles from '../styles/Spiner.module.css'

export default function Spiner() {
  return (
    <div className={styles.spinner} > 
      <ImSpinner2  className={styles.spinnig} size={60}/>
    </div>
  )
}
