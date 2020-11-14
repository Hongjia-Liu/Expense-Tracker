import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './icon';


const NavWrapper = styled.nav`
  background: #ffffff;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
    display: flex;
    > li {
      width: 33.333%;
      text-align: center;
      > a {
        color: grey;
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        align-items: center;
        .icon {
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: black;
          .icon {
            fill: black;
          }
        }
      }
    } 
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/tags" activeClassName="selected">
            <Icon name="tag"/>
            Tags
          </NavLink>
        </li>
        <li>
          <NavLink to="/track" activeClassName="selected">
            <Icon name="euro"/>
            Track
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName="selected">
            <Icon name="chart"/>
            Statistics
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};


export default Nav;