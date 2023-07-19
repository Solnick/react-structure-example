import { Box, styled } from '@mui/material';

export const LayoutContainer = styled(Box)`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const HeaderAndContentContainer = styled(Box)(
  ({ theme }) => `
  width: calc(100% - ${theme.variables.sidebarWidth});
  overflow: scroll;
  margin-left: auto;
  padding:${theme.spacing(2)} ${theme.spacing(4)};
`
);
export const ContentContainer = styled(Box)(
  ({ theme }) => `
  height: calc(100% - ${theme.variables.headerHeight});
`
);
