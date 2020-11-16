import styled from 'styled-components';
import React, {useState} from 'react';

const TagsWrapper = styled.section`
  background: #FFFFFF;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  > ol {
    margin: 0 -12px;
    > li {
      background: #d9d9d9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected {
        background:#A9A9A9;
      }
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

const Tags: React.FC = () => {
  const [tags, setTags] = useState<string[]>(['clothes', 'food', 'accommodation', 'transportation']);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const onAddTag = () => {
    const newTagName = String(window.prompt('Please enter a new tag'));
    if (newTagName !== null) {
      setTags([...tags, newTagName]);
    }
  };

  const onToggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      // If tag is already selected, then copy all other tags which are not selected as new selectedTag
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const isSelected = (tag: string) => {
    return selectedTags.includes(tag) ? 'selected' : '';
  }

  return (
    <TagsWrapper>
      <ol>
        {tags.map(tag =>
          <li
            key={tag}
            onClick={ ()=>{onToggleTag(tag);} }
            className={isSelected(tag)}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>New Tag</button>
    </TagsWrapper>
  );
};


export {Tags};