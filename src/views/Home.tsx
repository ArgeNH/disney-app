import { useAuth } from '../context/AuthContext';
import Navbar from '../components/header';
import Tabs from '../components/tabs';

const Home = () => {
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="h-screen bg-brand-900/60">
      <Navbar />
      <div className="container mx-auto pt-16">
        <h1>Welcome {user?.email}</h1>

        <Tabs />
      </div>
    </div>
  );
};

export default Home;
