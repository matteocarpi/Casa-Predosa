import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.scss';
import { graphql } from 'gatsby';
import classnames from 'classnames';

const IndexPage = ({data}) => (
  <Layout>
    <div style={{
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.20) 3%, rgba(0,0,0,0.2) 100%), url(${data.file.childImageSharp.fluid.src})`,
    }}
    className={styles.titleSlide}
    >
      <div className={styles.title}>
        <h1 className={classnames('white', styles.title)}>Casa Predosa</h1>
      </div>

    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
query HomeQuery {
  file(relativePath: {eq: "casa-predosa.jpg"}) {
    childImageSharp {
      fluid (maxWidth: 1920) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  allMarkdownRemark(filter: {frontmatter: {title: {eq: "home"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
        }
        internal {
          content
        }
      }
    }
  }
}`;
