import {
  Box,
  BoxProps,
  ListItem,
  ListItemIcon,
  styled,
  Typography,
} from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

export const StyledSidebarContainer = styled((props: BoxProps) => (
  <Box {...props} component="nav" />
))(
  ({ theme }) => `
  position: absolute;
  flex-direction: column;
  background: red;
  display: flex;
  justify-content: space-between;
  width: 96px;
  border-radius: 0px 20px 20px 0px;
  height: 100%;
  background-color: ${theme.palette.background.default};
  transition:width .2s;
  overflow: hidden;
  border: 1px solid ${theme.palette.grey[200]};
  flex-shrink: 0;
  z-index: 2222;
  &:hover {
    width: 240px;
    .MuiTypography-root {
      opacity:1;
    }
  }
`
);

export const StyledLogoContainer = styled(Box)(
  ({ theme }) => `
  border-bottom: 1px solid #0000001F;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 ${theme.spacing(3)};
  padding: ${theme.spacing(3)} 0;
  color: ${theme.palette.customGrey[8]};
`
);

export const StyledNavItemContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-wrap: nowrap
  align-items: center;
  justify-content: flex-start;
  padding: ${theme.spacing(5)} ${theme.spacing(5)} 0 ${theme.spacing(5)};
  color: ${theme.palette.grey[400]};
  &:not(.MuiListItem-root &)  {
    padding-bottom:${theme.spacing(5)}
  }
`
);

export const StyledNavLabel = styled((props: TypographyProps) => (
  <Typography {...props} variant={'body2'} />
))(
  () => `
  font-size: 15px;
  line-height: 22px;
  opacity: 0;
  transition: opacity .2s;
  white-space: nowrap;
`
);

export const StyledListItem = styled(ListItem)`
  padding-left: 0;
`;

export const StyledListItemIcon = styled(ListItemIcon)(
  ({ theme }) => `
  min-width: 0;
  margin-right: ${theme.spacing(3)}
`
);
