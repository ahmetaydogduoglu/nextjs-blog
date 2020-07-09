import React from 'react'
import styles from "./index.module.css"
import Link from 'next/link'

const index = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarLinkList}>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default index
