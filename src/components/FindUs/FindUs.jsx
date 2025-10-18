import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h1 className="md:font-semibold text-accent md:py-4">Find Us On</h1>
      <div className="join join-vertical w-full">
        <button className="btn join-item justify-start bg-base-100">
          <FaFacebook size={18}></FaFacebook>Facebook
        </button>
        <button className="btn join-item justify-start bg-base-100">
          <FaTwitter size={18}></FaTwitter>Twitter
        </button>
        <button className="btn join-item justify-start bg-base-100">
          <FaInstagram size={18}></FaInstagram>Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
