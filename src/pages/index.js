import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from  "../styles/home.module.css"

export default function Home() {
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop &amp; Deploy</h3>
          <p>UX Designer &amp; Web Developer based in Mumbai.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <img src="/banner.svg" alt="Portfolio Website Banner" style={{ maxWidth: '100%' }} />
      </section>
    </Layout>
  )
}
