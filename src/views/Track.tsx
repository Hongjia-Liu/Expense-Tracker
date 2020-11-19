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

  return (
    <MyLayout>
      {selected.tags.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.category}
      <hr/>
      {selected.amount}
      <Tags value={selected.tags}
            onChange={(tags) => {
              setSelected({...selected, tags: tags});
            }}
      />
      <Notes value={selected.note}
             onChange={(note) => {
               setSelected({...selected, note: note});
             }}
      />
      <Category value={selected.category}
                onChange={(category) => {
                  setSelected({...selected, category: category});
                }}
      />
      <NumberPad value={selected.amount}
                 onChange={(amount) => {
                   setSelected({...selected, amount: amount});
                 }}
                 onOk={() => {}}
      />
    </MyLayout>
  );
}

export default Track;