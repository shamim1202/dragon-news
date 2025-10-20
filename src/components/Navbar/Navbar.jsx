import { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { authContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const {user} = use(authContext)
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
        <Link to="/auth/login" className="btn btn-primary md:py-1.5 md:px-10 rounded-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
