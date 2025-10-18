import FindUs from "../FindUs/FindUs";
import QZone from "../QZone/QZone";
import SocialLogin from "../SocialLogin/SocialLogin";

const RightAside = () => {
  return <div className="space-y-6">
    <SocialLogin></SocialLogin>
    <FindUs></FindUs>
    <QZone></QZone>
  </div>;
};

export default RightAside;
