import { format } from "date-fns";
import { NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3">
        <NavLink to="/">
          <img className="w-sm" src={logo} alt="" srcset="" />
        </NavLink>
        <p className="text-info">Journalism Without Fear or Favour</p>
        <p className="font-semibold text-info">
          <span className="text-accent">{format(new Date(), "EEEE")},</span>
          {"  "}
          {format(new Date(), "MMMM dd, uuuu")}
        </p>
      </div>
    </div>
  );
};

export default Header;
