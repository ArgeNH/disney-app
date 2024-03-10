import { Routes, Route } from 'react-router-dom';

import Login from './views/Login';
import Register from './views/Register';
import ProtectedRoute from './views/ProtectedRoute';
import PublicRoute from './views/PublicRoute';
import DashboardRoutes from './views/DashboardRoutes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="*" element={<DashboardRoutes />} />
      </Route>

      <Route path="/*" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
