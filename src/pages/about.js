import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/about.module.css'

export default function About() {
    return (
        <Layout>
            <div className={styles.dummy}>
                <h2>About Page</h2>
                <div className={styles.content}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam tenetur eveniet quos fuga quidem unde modi nisi magni illo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam tenetur eveniet quos fuga quidem unde modi nisi magni illo?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, totam tenetur eveniet quos fuga quidem unde modi nisi magni illo?</p>
                </div>
            </div>
        </Layout>
    )
}
