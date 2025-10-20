import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-sm md:p-8">
        <h1 className="text-center text-primary md:text-2xl md:font-semibold md:py-4">
          Login your account
        </h1>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label md:font-medium md:text-sm text-primary">
              Email address
            </label>
            <input
              type="email"
              className="input bg-base-200 w-full"
              placeholder="Enter your e-mail address"
            />
            <label className="label md:font-medium md:text-sm text-primary">
              Password
            </label>
            <input
              type="password"
              className="input bg-base-200 w-full"
              placeholder="Enter your password"
            />
            <div>
              <a className="link link-hover md:text-sm">Forgot password?</a>
            </div>
            <button className="btn btn-primary md:my-3">Login</button>
            <p className="md:text-sm text-center">
              Dont’t Have An Account?{" "}
              <Link to="/auth/registration" className="text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Login;
