import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import Header from './header';
import './layout.css';
import Archive from '../components/archive';

const MainLayout = styled.main`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`;

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      file(relativePath: { eq: "desktop-pic.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);
  const [styles, set, stop] = useSpring(() => ({
    height: location.pathname === '/' ? 100 : 500,
  }));
  set(
    { to: { height: location.pathname === '/' ? 500 : 100 } },
    { from: { height: location.pathname === '/' ? 100 : 500 } }
  );
  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
        icon={data.file.childImageSharp.fluid}
      />
      <animated.div style={{ overflow: 'hidden', ...styles }}>
        <Img fluid={data.file.childImageSharp.fluid} />
      </animated.div>
      <MainLayout>
        <div>{children}</div>
        <Archive />
      </MainLayout>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
Layout.defaultProps = {
  location: {},
};

export default Layout;
