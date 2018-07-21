import React from 'react'
import ReactDOM from 'react-dom';
import Link from 'gatsby-link'
import styled from 'styled-components';
import Img from 'gatsby-image';

import logo from '../images/aaphotog_logo.png';

const HeaderWrapper = styled.div`
  background: #71eeb8;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: ${({ isHome }) => (isHome ? '70vh' : '20vh')};
  h1 {
    img{
      height: 100px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
`;

class Header extends React.Component {
  componentDidUpdate = (prevProps, prevState) => {
    const { location } = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      if(this.props.location.pathname === '/') {
        // TODO: use web animation reverse function instead
        this.wrapper.animate([
          { height: "20vh" },
          { height: "70vh" }
        ], {
          duration: 750,
          fill: "forwards", 
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        })
      } else {
        this.wrapper.animate([
          { height: "70vh" },
          { height: "20vh" }
        ], {
          duration: 750,
          fill: "forwards", 
          easing: "cubic-bezier(0.86, 0, 0.07, 1)",
          iterations: 1
        })
      }
    }
  };

  render() {
    const { data, location } = this.props;
    return (
      <HeaderWrapper 
        isHome={location.pathname === "/"}
        ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}
      >
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              <img src={logo} alt="Angela Ayd Photography Logo" />
            </Link>
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </HeaderContainer>
        <Img 
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%'
          }}
          sizes={data.background.sizes} 
        />
      </HeaderWrapper>
    )
  }
}

export default Header
