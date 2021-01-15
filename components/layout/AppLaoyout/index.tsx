import React from 'react';
import Header from '../../base/Header';
import Navigation from '../../base/Navigation';
import { StyledAppLayout } from './styles';

type props = {
  children: React.ReactNode;
};

function AppLayout({ children }: props) {
  return (
    <StyledAppLayout>
      <header className="header">
        <div className="wrapper">
          <Header />
        </div>
        <div className="wrapper">
          <Navigation />
        </div>
      </header>
      <div className="spacer" />
      <div className="content">{children}</div>
    </StyledAppLayout>
  );
}

export default AppLayout;
