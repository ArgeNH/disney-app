import { useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useAuth } from '../context/AuthContext';
import { handleFirebaseError } from '../utils/handleFirebaseError';
import { Form } from '../components/Form';
import { FormInput } from '../types';

const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const handleSubmitRegister = async (user: FormInput) => {
    try {
      await signUp(user.email, user.password);

      toast.success('User registered successfully');
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
    <div className="hero min-h-screen bg-brand-900/60">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register in Disney App now!</h1>
          <p className="py-6">
            Register to access all the content and enjoy the best movies and
            series.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-200 bg-opacity-90">
          <form
            className="card-body"
            onSubmit={handleSubmit(handleSubmitRegister)}
          >
            <Form isLogin={false} register={register} errors={errors} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
