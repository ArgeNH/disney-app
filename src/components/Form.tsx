import { Link } from 'react-router-dom';

interface FormProps {
  isLogin?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form = ({ isLogin = true, handleChange }: FormProps) => {
  return (
    <>
      <div className="form-control">
        <label className="label" htmlFor="email">
          <span className="label-text">Email</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          className="input input-bordered"
          required
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label className="label" htmlFor="password">
          <span className="label-text">Password</span>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          className="input input-bordered"
          required
          onChange={handleChange}
        />
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
