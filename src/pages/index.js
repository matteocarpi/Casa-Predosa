import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.50) 3%, rgba(0,0,0,0) 100%), url('')`,
      }}
      className={styles.titleSlide}
      >
        <div className={styles.title}>
          <h1 className={universal.white}>Casa Predosa</h1>
        </div>

      </div>
  </Layout>
)

export default IndexPage
