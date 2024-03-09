import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ProtectedRoute from './views/ProtectedRoute';
import PublicRoute from './views/PublicRoute';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Home />} />
      </Route>

      <Route path="/*" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
