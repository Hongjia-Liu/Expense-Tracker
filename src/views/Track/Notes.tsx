import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const NotesWrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span { margin-right: 16px; white-space: nowrap}
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;

const Notes: React.FC = () => {
  const [notes, setNotes] = useState('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      setNotes(refInput.current.value);
    }
  }

  return (
    <NotesWrapper>
      <label>
        <span>Note</span>
        <input type="text" placeholder="Please enter your notes here"
               ref={refInput}
               defaultValue={notes}
               onBlur={onBlur}
        />
      </label>
    </NotesWrapper>
  )

}

export {Notes}