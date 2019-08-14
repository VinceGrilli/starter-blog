import React from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';

// static query can be used anywhere, Doesn't accept variables, can't use context

// Page Query must be used on pages

export default function postLayout() {
  return (
    <Layout>
      <h1>Post Layout</h1>
    </Layout>
  );
}

export const query = graphql`
  query PostQuery {
    markdownRemark(frontmatter: { slug: { eq: "/third-post" } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`;
