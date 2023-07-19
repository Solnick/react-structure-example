import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';
import { ProtectedRoute } from './ProtectedRoute';

export const Routing = () => {
  return (
    <Routes>
      {routes.map(({ isPublic, path, Component }) => (
        <Route
          key={path}
          path={path}
          element={<ProtectedRoute isPublic={isPublic}>{Component}</ProtectedRoute>}
        />
      ))}
    </Routes>
  );
};
