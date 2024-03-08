import { toast } from 'sonner';

import { useAuth } from '../context/AuthContext';

const Login = () => {
  const auth = useAuth();

  console.log(auth);

  return (
    <div>
      <h1 className="text-2xl font-bold text-emerald-200">Login</h1>
      <button
        className="bg-emerald-500 text-white px-4 py-2 rounded-md"
        onClick={() => {
          toast.success('Hello world');
        }}
      >
        Alerta
      </button>
    </div>
  );
};

export default Login;
