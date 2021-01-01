import React from 'react';
import Link from 'next/link';
import { Dropdown, Input, Menu, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { StyledHeader } from './styles';
import Navigation from '../Navigation';

function Header() {
  return (
    <header
      style={{
        position: 'fixed',
        backgroundColor: 'white',
        zIndex: 1,
        width: '100%',
      }}
    >
      <div style={{ borderBottom: '1px solid #ddd' }}>
        <StyledHeader>
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/logo.png" className="logo-img" />
              </a>
            </Link>
          </div>
          <div className="search">
            <Input.Search placeholder="검색어를 입력해주세요" size="large" />
          </div>

          <div className="auth-btns">
            <Link href="/">
              <a>로그인</a>
            </Link>
            <Link href="/">
              <a>로그아웃</a>
            </Link>
          </div>

          {/* <div className="noti">
            <Link href="/chat">
              <a>
                <img src="/talk.png" alt="" />
              </a>
            </Link>
            <Link href="/alram">
              <a>
                <img src="/noti.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="user-nav">
            <Dropdown
              overlay={<HeaderMenu />}
              trigger={['click']}
              getPopupContainer={(triggerNode) => triggerNode.parentNode as any}
            >
              <div>
                <Avatar size="large">최</Avatar>
                <Typography.Text className="nick">n16297463님</Typography.Text>
              </div>
            </Dropdown>
          </div> */}
        </StyledHeader>
      </div>
      <div style={{ borderBottom: '1px solid #ddd' }}>
        <Navigation />
      </div>
    </header>
  );
}

const HeaderMenu = () => {
  return (
    <Menu style={{ border: '1px solid #ddd' }}>
      <Menu.Item>
        <Link href="/store">
          <a>내 상점</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/">로그아웃</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
