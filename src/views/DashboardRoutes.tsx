import { Route, Routes } from 'react-router-dom';

import Favorites from './Favorites';
import WatchList from './WatchList';
import Home from './Home';
import Navbar from '@nh/components/header';
import ContentDetails from '@nh/components/ui/ContentDetails';

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
