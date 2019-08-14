import React from 'react';
import Layout from './layout';
import { graphql } from 'gatsby';

// static query can be used anywhere, Doesn't accept variables, can't use context

// Page Query must be used on pages

const postLayout = () => {
  return (
    <Layout>
      <h1>Post Layout</h1>
    </Layout>
  );
};

// export const query = graphql`
//   query PostQuery($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date
//         slug
//       }
//     }
//   }
// `;

export default postLayout;
