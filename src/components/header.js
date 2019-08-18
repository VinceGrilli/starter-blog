import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import logo from '../images/brain-jar.jpg';
import { relative } from 'path';

const HeaderWrapper = styled.div`
  background: #4c4744;
  margin-bottom: 0;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0.5rem;
  img {
    margin-bottom: 0;
  }
`;

const Header = ({ siteTitle, siteDescription, icon }) => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img
              style={{
                width: '100px',
              }}
              src={logo}
            />
            <span>{siteDescription}</span>
          </Link>
        </h1>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
