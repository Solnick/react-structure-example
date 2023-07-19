import {
  StyledListItem,
  StyledListItemIcon,
  StyledLogoContainer,
  StyledNavItemContainer,
  StyledNavLabel,
  StyledSidebarContainer,
} from './Sidebar.styled';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { routes } from '../../Routing/routes';
import { Box, List } from '@mui/material';
import { ReactComponent as ReactLogo } from '../../../../assets/react.svg';

export const Sidebar = () => {
  return (
    <StyledSidebarContainer>
      <Box>
        <StyledLogoContainer>
          <RouterLink to={'/'}>
          <ReactLogo />
          </RouterLink>
        </StyledLogoContainer>
        <List>
          {routes.map(({ Icon, path, name }) =>
            Icon ? (
              <StyledListItem key={path}>
                <Link underline={'none'} component={RouterLink} to={path}>
                  <StyledNavItemContainer>
                    <StyledListItemIcon>
                      <Icon />
                    </StyledListItemIcon>
                    <StyledNavLabel>{name}</StyledNavLabel>
                  </StyledNavItemContainer>
                </Link>
              </StyledListItem>
            ) : null
          )}
        </List>
      </Box>
    </StyledSidebarContainer>
  );
};
