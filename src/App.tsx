import { Toaster } from 'sonner';

import AppRouter from './routes';
import { AuthProvider } from './context/AuthContext';
import { MoviesProvider } from './context/MoviesContext';

function App() {
  return (
    <div>
      <AuthProvider>
        <MoviesProvider>
          <Toaster richColors expand />
          <AppRouter />
        </MoviesProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
