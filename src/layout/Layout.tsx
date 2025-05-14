import React, { type ReactNode } from 'react';
import * as S from './Layout.styled';
import Header from '../components/header/Header';
import { ScrollRestoration } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* 라우팅 시 스크롤 복원 */}
      <ScrollRestoration />
      {/* <Header /> */}
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </>
  );
};

export default Layout;
