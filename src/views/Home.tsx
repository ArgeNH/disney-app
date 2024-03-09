import { toast } from 'sonner';

import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user, logout, loading } = useAuth();

  console.log(user);

  const handleLogout = async () => {
    await logout();

    toast.info('User logged out successfully');
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Welcome {user?.email}</h1>

      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Home;
