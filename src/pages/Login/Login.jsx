import { useContext } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { authContext } from "../../providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(authContext);

  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });

    logIn(email, password)
    .then(res => {
      const user = res.user;
      console.log(user)
      toast("Login Successful")
    })
    .catch(error => {
      const message = error.message;
      const code = error.code;
      toast(code,':', message)
      console.log(message,code)
    })

    form.reset();
  };
  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-sm md:p-8">
        <h1 className="text-center text-primary md:text-2xl md:font-semibold md:py-4">
          Login your account
        </h1>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* --- Email --- */}
            <label className="label md:font-medium md:text-sm text-primary">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="input bg-base-200 w-full"
              placeholder="Enter your e-mail address"
            />

            {/* --- Password --- */}
            <label className="label md:font-medium md:text-sm text-primary">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input bg-base-200 w-full"
              placeholder="Enter your password"
            />
            <div>
              <a className="link link-hover md:text-sm">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-primary md:my-3">
              Login
            </button>

            <p className="md:text-sm text-center">
              Dont’t Have An Account?{" "}
              <Link to="/auth/registration" className="text-secondary">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
