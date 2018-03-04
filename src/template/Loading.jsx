import React from 'react'
import styles from 'Main/App.scss'

export default props => (
  <div className={styles.centralize} >
    <div className={styles.imgWrapper}>
      <img className={styles.rotate} src="/images/util/loading.png" alt="Loading" />
    </div>
  </div>
)
