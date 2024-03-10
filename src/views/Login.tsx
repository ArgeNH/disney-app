import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

import { useAuth } from '../context';
import { Form } from '../components/Form';
import { handleFirebaseError } from '../utils/handleFirebaseError';
import { FormInput } from '../types';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const handleSubmitLogin = async (user: FormInput) => {
    try {
      await login(user.email, user.password);

      toast.success('User login successfully');
      navigate('/');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const errorMessage = handleFirebaseError(error);
        toast.error(errorMessage);
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="hero min-h-screen bg-word-900/60">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login in Disney App now!</h1>
          <p className="py-6">
            Login to access all the content and enjoy the best movies and
            series.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-word-600 bg-opacity-90">
          <form
            className="card-body"
            onSubmit={handleSubmit(handleSubmitLogin)}
          >
            <Form isLogin register={register} errors={errors} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
