import { Box, BoxProps, styled } from '@mui/material';

export const StyledHeaderContainer = styled((props: BoxProps) => (
  <Box {...props} component="header" />
))(
  ({ theme }) => `
  display: flex;
  height: ${theme.variables.headerHeight};
  justify-content: space-between;
  align-items:center;
`
);
