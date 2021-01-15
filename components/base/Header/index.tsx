import React from 'react';
import Link from 'next/link';
import { Badge, Dropdown, Input, Menu } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { StyledHeader } from './styles';
import { UserOutlined } from '@ant-design/icons';
import { useUser } from '../../../lib/contexts/UserContext';
import { JWT_LOGIN_TOKEN } from '../../../constants';

function Header() {
  const [user, setUser] = useUser();

  const onLogOut = () => {
    localStorage.removeItem(JWT_LOGIN_TOKEN);
    setUser(null);
  };

  return (
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
      {user ? (
        <>
          <div className="noti">
            <Link href="/chat">
              <a>
                <Badge count={0} size={'small'}>
                  <img src="/talk.png" alt="" />
                </Badge>
              </a>
            </Link>
            <Link href="/alram">
              <a>
                <Badge count={0} size={'small'}>
                  <img src="/noti.png" alt="" />
                </Badge>
              </a>
            </Link>
          </div>
          <div className="user-nav">
            <Dropdown
              overlay={<HeaderMenu onLogOut={onLogOut} />}
              trigger={['click']}
              getPopupContainer={(triggerNode) => triggerNode.parentNode as any}
            >
              <div>
                <Avatar icon={<UserOutlined />} />
                <span className="nick">{user.nickname}님</span>
              </div>
            </Dropdown>
          </div>
        </>
      ) : (
        <div className="auth-btns">
          <Link href="/auth/login">
            <a>로그인</a>
          </Link>
          <Link href="/auth/join">
            <a>회원가입</a>
          </Link>
        </div>
      )}
    </StyledHeader>
  );
}

const HeaderMenu = ({ onLogOut }) => {
  return (
    <Menu style={{ border: '1px solid #ddd' }}>
      <Menu.Item>
        <Link href="/store" >
          <a>내 상점</a>
        </Link>
      </Menu.Item>
      <Menu.Item onClick={onLogOut}>
        <Link href="/">로그아웃</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Header;
