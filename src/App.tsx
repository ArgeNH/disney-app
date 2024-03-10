import { Toaster } from 'sonner';

import AppRouter from './routes';
import { AuthProvider, MoviesProvider } from './context';

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
