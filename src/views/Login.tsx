import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { toast } from 'sonner';

import { useAuth } from '../context/AuthContext';
import { handleFirebaseError } from '../utils/handleFirebaseError';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);

      toast.success('User login successfully');
      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        console.log(error.code);
        const errorMessage = handleFirebaseError(error);
        toast.error(errorMessage);
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div
      className="rounded-lg border bg-card text-card-foreground shadow-sm mx-auto max-w-sm"
      data-v0-t="card"
    >
      <div className="flex flex-col p-6 space-y-1">
        <h3 className="whitespace-nowrap tracking-tight text-2xl font-bold">
          Login
        </h3>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="p-6">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              name="email"
              placeholder="m@example.com"
              type="email"
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <a className="ml-auto inline-block text-sm underline" href="#">
                Forgot your password?
              </a>
            </div>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
            />
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
            type="submit"
          >
            Login
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
            Login with Google
          </button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don't have an account?
          <a className="underline" href="#">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
