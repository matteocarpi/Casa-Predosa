import React from 'react';
import Layout from '../components/layout';
import styles from '../styles/Home.module.scss';
import { graphql } from 'gatsby';
import classnames from 'classnames';
import Markdown from 'markdown-to-jsx';
import Img from 'gatsby-image';
import { PropTypes } from 'prop-types';
import SEO from '../components/seo';

const Home = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.20) 3%, rgba(0,0,0,0.2) 100%), url(${data.file.childImageSharp.fluid.src})`,
    }}
    className={styles.titleSlide}
    >
      <div className={styles.title}>
        <h1 className={classnames('white', styles.title)}>Casa Predosa</h1>
        <h2 className={styles.subTitle}>Attività e ospitalità contadine</h2>
      </div>

    </div>

    <article className={styles.content}>
      <h1>Progetto</h1>
      <Markdown>
        {data.allMarkdownRemark.edges[0].node.internal.content}
      </Markdown>
    </article>

    <article className={styles.gallery}>
      <h1>Galleria</h1>
      <div className={styles.images}>
        {data.gallery.edges.map((image) => {
          return (
            <Img className={styles.thumb} key={image.node.id} fluid={image.node.childImageSharp.fluid}></Img>
          );
        })}
      </div>
    </article>
  </Layout>
);

export default Home;

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
  gallery: allFile(filter: {relativeDirectory: {eq: "Gallery"}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`;

Home.propTypes = {
  data: PropTypes.node,
};
