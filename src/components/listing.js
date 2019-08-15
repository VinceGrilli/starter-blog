import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from '../components/image';
const Listing = () => {
  const LISTING_QUERY = useStaticQuery(graphql`
    query BlogPostListing {
      allMarkdownRemark(
        limit: 5
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              date
              title
              slug
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {LISTING_QUERY.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
        </article>
      ))}
    </>
  );
};

export default Listing;
