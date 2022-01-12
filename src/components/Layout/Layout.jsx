import React from 'react'
import Header from './Header'
import styles from '../../App.css'

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
            <Header />
            {children}
        </div>
    )
}
