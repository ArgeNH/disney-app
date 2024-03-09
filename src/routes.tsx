import { Routes, Route } from 'react-router-dom';

import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ProtectedRoute from './views/ProtectedRoute';
import PublicRoute from './views/PublicRoute';
import WatchList from './views/WatchList';
import Favorites from './views/Favorites';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route index element={<Home />} />
        <Route path="watch_list" element={<WatchList />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>

      <Route path="/*" element={<PublicRoute />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
