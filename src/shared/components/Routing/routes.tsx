import { Login } from '../../../views/Login';
import { RoutesEnum } from '../../types/Routes.enum';
import { Route } from '../../types/Route';
import { Dashboard } from '../../../views/Dashboard';
import { Home } from '@mui/icons-material';

export const routes: Array<Route> = [
  {
    path: RoutesEnum.LogIn,
    Component: <Login />,
    isPublic: true,
    Icon: null,
  },
  {
    path: RoutesEnum.Fallback,
    Component: <Login />,
    isPublic: true,
    Icon: null,
  },
  {
    path: RoutesEnum.Dashboard,
    Component: <Dashboard />,
    name: 'dashboard',
    isPublic: false,
    Icon: () => <Home />,
  },
];
