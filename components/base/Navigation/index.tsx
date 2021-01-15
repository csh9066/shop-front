import { Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { useState } from 'react';
import { StyledCategories, StyledNavigation } from './sytles';
import { ProductCategory } from '../../../types/products';
import { CategoryTextMap } from '../../../constants';

function Navigation() {
  const [visible, setVisibile] = useState(false);

  return (
    <StyledNavigation>
      <Dropdown
        onVisibleChange={(visible) => setVisibile(visible)}
        overlay={<Categories />}
        trigger={['click']}
        getPopupContainer={(triggerNode) => triggerNode.parentNode as any}
      >
        <div
          className="drop-down-btn"
          style={{ backgroundColor: visible && '#f5f6f7' }}
        >
          <span>카테고리</span>
          <DownOutlined className={visible && 'up'} />
        </div>
      </Dropdown>
      <Button type="primary">
        <Link href="/products/form">
          <a>
            <img src="/camera.png" alt="" />
            <span>판매하기</span>
          </a>
        </Link>
      </Button>
    </StyledNavigation>
  );
}

function Categories() {
  return (
    <StyledCategories>
      {Object.values(ProductCategory).map((v) => (
        <li key={v}>
          <img src={`/categories/${v}.png`} />
          {CategoryTextMap[v]}
        </li>
      ))}
    </StyledCategories>
  );
}

export default Navigation;
