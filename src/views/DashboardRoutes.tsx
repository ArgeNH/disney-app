import { Route, Routes } from 'react-router-dom';

import Navbar from '../components/header';
import Home from './Home';
import WatchList from './WatchList';
import Favorites from './Favorites';
import ContentDetails from '../components/ui/ContentDetails';

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="watch_list" element={<WatchList />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
      </div>

      <ContentDetails />
    </>
  );
};

export default DashboardRoutes;
