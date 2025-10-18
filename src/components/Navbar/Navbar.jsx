import { NavLink } from "react-router";
import userIcon from "../../assets/user.png";

const Navbar = () => {
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
        <button className="btn btn-primary md:py-1.5 md:px-10 rounded-none">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
