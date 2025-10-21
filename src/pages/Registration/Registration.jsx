import { use } from "react";
import { Link } from "react-router";
import { authContext } from "../../providers/AuthProvider";

const Registration = () => {
  const { createUser, setUser } = use(authContext);
  //  Register functionality ===================>
  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photo_url.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoUrl, email, password);

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
      })
      .catch((error) => {
        const message = error.message;
        console.log(message);
      });
    form.reset();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-sm md:p-8">
        <h1 className="text-center text-primary md:text-2xl md:font-semibold md:py-4">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* --- Name --- */}
            <label className="label md:font-medium md:text-sm text-primary">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="input bg-base-200 w-full"
              placeholder="Enter your name"
              required
            />

            {/* --- Photo Url --- */}
            <label className="label md:font-medium md:text-sm text-primary">
              Phott URL
            </label>
            <input
              type="text"
              name="photo_url"
              className="input bg-base-200 w-full"
              placeholder="Enter your photo url"
              required
            />

            {/* --- Email --- */}
            <label className="label md:font-medium md:text-sm text-primary">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="input bg-base-200 w-full"
              placeholder="Enter your e-mail address"
              required
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
              required
            />

            <input type="checkbox" name="" id="" />

            <button type="submit" className="btn btn-primary md:my-3">
              Register
            </button>

            <p className="md:text-sm text-center">
              Already Have An Account?{" "}
              <Link to="/auth/login" className="text-secondary">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Registration;
