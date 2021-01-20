import { Input, Modal, Tag } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import React, { useRef, useState } from 'react';
import { StyledTagsInput } from './style';

type props = {
  onChange?: (value: string[]) => void;
  value?: string[];
} & ModalProps;

function TagsInput({ onChange, value: tags }: props) {
  const [localTag, setLolcaTag] = useState('');
  const inputRef = useRef<any>();

  const onChangeLolcaTag = (e) => {
    const tag: string = e.target.value;

    if (tag && tag.length > MAX_LOCCALTAG_LENGTH) {
      return;
    }

    setLolcaTag(tag);
  };

  const onInsertTag = () => {
    if (localTag.length <= 0) {
      return;
    }

    if (tags.includes(localTag)) {
      Modal.error({
        content: '이미 입력한 태그입니다.',
        onOk: () => {
          inputRef.current?.focus();
        },
      });
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
    <>
      <Input
        placeholder="태그를 입력하세요"
        prefix="#"
        maxLength={10}
        value={localTag}
        onChange={onChangeLolcaTag}
        onPressEnter={onInsertTag}
        ref={inputRef}
        style={{ width: 180 }}
      />
      <div>
        {tags.map((tag) => (
          <Tag
            closable
            onClose={() => onDeleteTag(tag)}
            key={tag}
            style={{ marginTop: 6 }}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </>
  );
}

// 입력할 수 있는 최대 태그 개수;
const MAX_TAGS_LENGTH = 5;
// 최대 태그 문자열 길이;
const MAX_LOCCALTAG_LENGTH = 10;

export default TagsInput;
