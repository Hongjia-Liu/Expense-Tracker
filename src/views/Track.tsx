import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';

const TagsSection = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
    }
  }
  
  > button {
    background: none;
    border: none;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;

const NotesSection = styled.section`
  
`;
const CategorySection = styled.section`
  
`;
const NumberPadSection = styled.section`
  
`;

function Track() {
  return (
    <Layout>
      <TagsSection>
        <ol>
          <li>clothes</li>
          <li>food</li>
          <li>accommodation</li>
          <li>transportation</li>
        </ol>
        <button>New Tag</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>Note</span>
        </label>
        <input type="text"/>
      </NotesSection>
      <CategorySection>
        <ul>
          <li>Income</li>
          <li>Expense</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div>
          100
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>Delete</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>Clear</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>OK</button>
          <button>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </Layout>
  );
}

export default Track;