import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  const { category_id, title, image_url, details } = news;
  return (
    <div className="md:p-4 md:space-y-5 border border-base-300 rounded">
      <figure>
        <img
          className="w-full h-[400px] object-cover rounded"
          src={image_url}
          alt=""
        />
      </figure>
      <h1 className="md:text-2xl font-semibold text-accent">{title}</h1>
      <p className="text-xs md:text-base text-info md:leading-7">{details}</p>
      <Link className="btn btn-secondary" to={`/category/${category_id}`}>
        <FaArrowLeft /> Back to category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
