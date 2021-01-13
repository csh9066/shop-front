import { Button, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { useState } from 'react';
import { StyledCategories, StyledNavigation } from './sytles';

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
        <Link href="/products/register-form">
          <a>
            <img src="camera.png" alt="" />
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
      <li>
        <img
          src="https://ccimage.hellomarket.com/web/2018/common/category/cate_hfa0000.png"
          alt=""
        />
        <span>자동차</span>
      </li>
      <li>
        <img
          src="https://ccimage.hellomarket.com/web/2018/common/category/cate_hfa0000.png"
          alt=""
        />
        <span>자동차</span>
      </li>
      <li>
        <img
          src="https://ccimage.hellomarket.com/web/2018/common/category/cate_hfa0000.png"
          alt=""
        />
        <span>자동차</span>
      </li>
      <li>
        <img
          src="https://ccimage.hellomarket.com/web/2018/common/category/cate_hfa0000.png"
          alt=""
        />
        <span>자동차</span>
      </li>
      <li>
        <img
          src="https://ccimage.hellomarket.com/web/2018/common/category/cate_hfa0000.png"
          alt=""
        />
        <span>자동차</span>
      </li>
      <li>
        <img
          src="https://ccimage.hellomarket.com/web/2018/common/category/cate_hfa0000.png"
          alt=""
        />
        <span>자동차</span>
      </li>
      <li>
        <img
          src="https://ccimage.hellomarket.com/web/2018/common/category/cate_hfa0000.png"
          alt=""
        />
        <span>자동차</span>
      </li>
      <li>
        <img
          src="https://ccimage.hellomarket.com/web/2018/common/category/cate_hfa0000.png"
          alt=""
        />
        <span>자동차</span>
      </li>
      <li>
        <img
          src="https://ccimage.hellomarket.com/web/2018/common/category/cate_hfa0000.png"
          alt=""
        />
        <span>자동차</span>
      </li>
    </StyledCategories>
  );
}

export default Navigation;
