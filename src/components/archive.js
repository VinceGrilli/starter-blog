import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

const ArchiveList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  a {
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`;

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
        <ArchiveList>
          {POST_ARCHIVE_QUERY.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.frontmatter.slug}>
              <Link to={`/posts${edge.node.frontmatter.slug}`}>
                {edge.node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ArchiveList>
      </aside>
    </>
  );
};

export default Archive;
