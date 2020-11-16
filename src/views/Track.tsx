import Layout from '../components/Layout';
import React from 'react';
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
  return (
    <MyLayout>
      <Tags />
      <Notes />
      <Category />
      <NumberPad />
    </MyLayout>
  );
}

export default Track;