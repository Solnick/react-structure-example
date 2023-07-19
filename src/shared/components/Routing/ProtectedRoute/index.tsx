import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { RoutesEnum } from '../../../types/Routes.enum';
import { CircularProgress } from '@mui/material';
import { authApi } from '../../../logic/api/authApi';
import { User } from '../../../types/User';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps extends PropsWithChildren {
  isPublic?: boolean;
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isPublic,
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function check() {
      try {
        const user = await authApi.getUserByToken();
        setUser(user);
      } catch {
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    }
    void check();
  }, []);

  if(isPublic) {
    return <>{children}</>;
  } else if (isLoading) {
    return <CircularProgress />;
  } else if (user) {
    return <>{children}</>;
  } else {
    return <Navigate to={RoutesEnum.LogIn} />;
  }
};
