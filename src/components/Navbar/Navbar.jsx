import { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { authContext } from "../../providers/AuthProvider";

import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = use(authContext);

  const handleLogOut = () => {
    console.log("clicked");
    logOut()
    .then(()=> {
      toast("Your logged out Successful!");
    })
  };
  return (
    <div className="relative flex items-center justify-center md:mb-16">
      {/* ------- Navigation Link ------- */}
      <div className="text-center md:space-x-8 text-info">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>

      {/* ------- User icon & Login Button ------- */}
      <div className="absolute md:right-0 md:-top-2 flex items-center md:gap-2">
        <img src={userIcon} alt="" srcset="" />
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-secondary md:py-1.5 md:px-10 rounded-none"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary md:py-1.5 md:px-10 rounded-none"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
