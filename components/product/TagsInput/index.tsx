import { Input, Modal, Tag } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import React, { useState } from 'react';
import { StyledTagsInput } from './style';

type props = {
  onChange?: (value: string[]) => void;
  value?: string[];
} & ModalProps;

function TagsInput({ onChange, value: tags }: props) {
  const [localTag, setLolcaTag] = useState('');

  const onChangeLolcaTag = (e) => {
    if (e.target.value.length > MAX_LOCCALTAG_LENGTH) {
      return;
    }

    setLolcaTag(e.target.value);
  };

  const onInsertTag = () => {
    if (tags.includes(localTag)) {
      Modal.error({ content: '이미 입력한 태그입니다.' });
      return;
    }

    if (tags.length >= MAX_TAGS_LENGTH) {
      Modal.error({ content: '최대 5개 까지 입력할 수 있습니다.' });
      return;
    }

    onChange([...tags, localTag]);
    setLolcaTag('');
  };

  const onDeleteTag = (tag: string) => {
    onChange(tags.filter((v) => v !== tag));
  };

  return (
    <StyledTagsInput>
      <Input
        placeholder="태그를 입력하세요"
        prefix="#"
        maxLength={10}
        value={localTag}
        onChange={onChangeLolcaTag}
        onPressEnter={onInsertTag}
        width="180"
      />
      {tags.map((tag) => (
        <Tag closable onClose={() => onDeleteTag(tag)} key={tag}>
          {tag}
        </Tag>
      ))}
    </StyledTagsInput>
  );
}

// 입력할 수 있는 최대 태그 개수;
const MAX_TAGS_LENGTH = 5;
// 최대 태그 문자열 길이;
const MAX_LOCCALTAG_LENGTH = 10;

export default TagsInput;
