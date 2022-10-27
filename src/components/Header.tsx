import styles from "./Header.module.css"
import wrench from "../assets/wrench.svg"
import userIcon from "../assets/ic_person.svg"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.companyInfo}>
        <img src={wrench} alt="Wrench CRM Logo" className={styles.logo} />
        <p className="company-name">Wrench CRM</p>
      </div>
      <div className={styles.userInfo}>
        <img src={userIcon} alt="User Icon" className={styles.userIcon} />
        <p className={styles.userName}>Имя Фамилия</p>
      </div>
    </header>
  )
}
export default Header