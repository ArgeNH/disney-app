import { Toaster } from 'sonner';

import AppRouter from './routes';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div className="h-screen bg-gradient">
      <AuthProvider>
        <Toaster richColors expand />
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
