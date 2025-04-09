import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Home.module.css"

function Home() {
  return (
    <>

    <div className={styles.container}>

      <Link to="/users"><button className={styles.btn}>users</button></Link>
      <Link to="/weather"><button className={styles.btn}>weather</button></Link>

    </div>
    </>
  )
}

export default Home