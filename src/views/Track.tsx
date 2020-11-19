import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Tags} from './Track/Tags';
import {Notes} from './Track/Notes';
import {Category} from './Track/Category';
import {NumberPad} from './Track/NumberPad';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Track() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as ('-' | '+'),
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj});
  };
  return (
    <MyLayout>
      <Tags value={selected.tags}
            onChange={tags => onChange({tags})}/>
      <Notes value={selected.note}
             onChange={note => onChange({note})}/>
      <Category value={selected.category}
                onChange={category => onChange({category})}/>
      <NumberPad value={selected.amount}
                 onChange={amount => onChange({amount})}
                 onOk={() => {
                 }}
      />
    </MyLayout>
  );
}

export default Track;