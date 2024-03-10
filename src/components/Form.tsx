import { Link } from 'react-router-dom';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormInput } from '@nh/types';
interface FormProps {
  isLogin?: boolean;
  register: UseFormRegister<FormInput>;
  errors: FieldErrors<FormInput>;
}

export const Form = ({ isLogin = true, register, errors }: FormProps) => {
  return (
    <>
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="email"
          className="input input-bordered"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Invalid email format',
            },
          })}
        />
        {errors.email && (
          <span className="text-xs text-error mt-1">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Password</span>
        </label>
        <input
          id="password"
          type="password"
          placeholder="password"
          className="input input-bordered"
          {...register('password', {
            required: 'Password is required',
            validate: (value) => {
              if (isLogin) return true;

              if (!isLogin) {
                if (value.length < 8) {
                  return 'Password must have at least 8 characters';
                }

                if (!value.match(/[a-zA-Z]/)) {
                  return 'Password must contain at least one letter';
                }
                if (!value.match(/[0-9]/)) {
                  return 'Password must contain at least one number';
                }

                if (!value.match(/[!@#$%^&*()_+]/)) {
                  return 'Password must contain at least one special character';
                }
              }
            },
          })}
        />
        {errors.password && (
          <span className="text-xs text-error mt-1">
            {errors.password.message}
          </span>
        )}
        <label className="label">
          <Link
            to={isLogin ? '/register' : '/login'}
            className="label-text-alt link link-hover text-base"
          >
            {isLogin ? 'Register now!' : 'Login now!'}
          </Link>
        </label>
      </div>
      <div className="form-control mt-2">
        <button className="btn btn-primary" type="submit">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </div>
    </>
  );
};
