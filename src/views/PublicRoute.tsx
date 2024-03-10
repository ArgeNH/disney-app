import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@nh/context';

const PublicRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  if (user) return <Navigate to="/" />;

  return <Outlet />;
};

export default PublicRoute;
