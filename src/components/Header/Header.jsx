import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-3">
        <img className="w-sm" src={logo} alt="" srcset="" />
        <p className="text-[#706f6f]">Journalism Without Fear or Favour</p>
      </div>
    </div>
  );
};

export default Header;
