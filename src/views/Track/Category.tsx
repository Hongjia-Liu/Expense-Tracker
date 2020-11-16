import styled from 'styled-components';
import React, {useState} from 'react';

const CategoryWrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    background: #c4c4c4;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        height: 6px;
        background: #333;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

const Category :React.FC = () => {
  const categoryMap = {'-':'Expense', '+':'Income'};
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  return (
    <CategoryWrapper>
      <ul>
        {categoryList.map(c =>
            <li className={category === c ? 'selected' : ''}
                key={c}
                onClick={() => {setCategory(c);}}
            >{categoryMap[c]}
            </li>
        )}
      </ul>
    </CategoryWrapper>
  )
}

export {Category}