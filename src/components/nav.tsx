import styled from 'styled-components';
import {Link} from 'react-router-dom';
import React from 'react';
import Icon from './icon';


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      width: 33.333%;
      text-align: center;
      padding: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag"/>
          <Link to="/tags">Tags</Link>
        </li>
        <li>
          <Icon name="euro"/>
          <Link to="/track">Track</Link>
        </li>
        <li>
          <Icon name="chart"/>
          <Link to="/statistics">Statistics</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;