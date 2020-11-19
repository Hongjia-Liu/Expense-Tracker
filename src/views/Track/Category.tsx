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

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void;
}

const Category: React.FC<Props> = (props) => {
  const categoryMap = {'-': 'Expense', '+': 'Income'};
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const category = props.value;

  return (
    <CategoryWrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              key={c}
              onClick={() => {
                props.onChange(c);
              }}
          >{categoryMap[c]}
          </li>
        )}
      </ul>
    </CategoryWrapper>
  );
};

export {Category};