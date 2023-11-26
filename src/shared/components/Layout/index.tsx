import { FC, PropsWithChildren } from 'react';
import {
  ContentContainer,
  HeaderAndContentContainer,
  LayoutContainer,
} from './Layout.styled';
import { Header } from './Header';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderAndContentContainer>
        <Header />
        <ContentContainer>{children}</ContentContainer>
      </HeaderAndContentContainer>
    </LayoutContainer>
  );
};
