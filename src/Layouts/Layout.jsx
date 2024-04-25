import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
    <header className={styles.header}>
        <h1>CRYPTO APP</h1>
        <p>
            <a href="https://radblack.online/">RaDBlaCK01</a> | React.js CRYPTOAPP
        </p>
    </header>
    {children}
    <footer className={styles.footer}>
        <p>Developed by RB01 with BN</p>
    </footer>
    </>
  )
}

export default Layout