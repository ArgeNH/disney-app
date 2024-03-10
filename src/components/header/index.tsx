import { Link } from 'react-router-dom';
import { toast } from 'sonner';

import { useAuth } from '@nh/context';

const Navbar = () => {
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    toast.success('User logged out successfully');
  };

  return (
    <div className="navbar bg-brand-600 bg-opacity-15 filter backdrop-blur-[4px] fixed z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="text-word-100 hover:text-brand-700">
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/watch_list"
                className="text-word-100 hover:text-brand-700"
              >
                WATCH LIST
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="text-word-100 hover:text-brand-700"
              >
                FAVORITES
              </Link>
            </li>
          </ul>
        </div>
        <Link
          className="text-xl font-bold transition-transform hover:scale-110"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-disney text-brand-700"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3.22 5.838c-1.307 -.15 -1.22 -.578 -1.22 -.794c0 -.216 .424 -1.044 4.34 -1.044c4.694 0 14.66 3.645 14.66 10.042s-8.71 4.931 -10.435 4.52c-1.724 -.412 -5.565 -2.256 -5.565 -4.174c0 -1.395 3.08 -2.388 6.715 -2.388c3.634 0 5.285 1.041 5.285 2c0 .5 -.074 1.229 -1 1.5" />
            <path d="M10.02 8a505.153 505.153 0 0 0 0 13" />
          </svg>
        </Link>

        <p className="text-word-100 px-2">
          Welcome {user?.email ? user.email : 'User'}
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-word-100 hover:text-brand-700">
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/watch_list"
              className="text-word-100 hover:text-brand-700"
            >
              WATCH LIST
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              className="text-word-100 hover:text-brand-700"
            >
              FAVORITES
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button
          className="bg-brand-900 text-white p-2 rounded-md hover:bg-word-100 hover:text-word-600 border-word-100 border-[1px]"
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default Navbar;
