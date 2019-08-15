import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Archive = () => {
  const POST_ARCHIVE_QUERY = useStaticQuery(graphql`
    query BlogPostAchive {
      allMarkdownRemark(
        limit: 5
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
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
      <aside>
        <h3>Archive</h3>
        <ul>
          {POST_ARCHIVE_QUERY.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

export default Archive;