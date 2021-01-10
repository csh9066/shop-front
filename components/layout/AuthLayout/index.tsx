import React from 'react';
import styled from 'styled-components';

type props = {
  children: React.ReactNode;
  title: string;
};

function AuthLayout({ children, title }: props) {
  return (
    <StyledAuthLayout>
      <div className="title">{title}</div>
      {children}
    </StyledAuthLayout>
  );
}

const StyledAuthLayout = styled.div`
  width: 400px;
  margin: 0 auto;
  padding-top: 89px;

  .title {
    text-align: center;
    margin-bottom: 60px;
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    color: #000;
  }
`;

export default AuthLayout;
