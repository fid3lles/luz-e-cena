import React from 'react'
import styles from '../Header.module.css'

const HeaderListItem = ({children}: React.HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles['menu-item']}>{children}</li>
  )
}

export default HeaderListItem