import { FaRegEye, FaShareAlt, FaStar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";

const NewsCard = ({ news }) => {
  const { title, details, author, thumbnail_url, rating, total_view, tags } =
    news;

  // Format published date
  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="card border border-base-200 shadow-md hover:shadow-md transition duration-300 bg-base-100">
      {/* Author Info */}
      <div className="flex items-center justify-between p-4 bg-base-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm text-neutral">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">{publishedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <button className="hover:text-accent transition">
            <FaRegBookmark size={18} />
          </button>
          <button className="hover:text-accent transition">
            <FaShareAlt size={18} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="font-bold text-lg text-neutral">{title}</h2>

        <figure className="w-full rounded-lg overflow-hidden">
          <img
            src={thumbnail_url}
            alt={title}
            className="w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>

        {/* Details (trim long text) */}
        <p className="text-sm text-gray-600 leading-relaxed">
          {details.slice(0, 200)}...
          <span className="text-accent font-medium cursor-pointer hover:underline ml-1">
            Read More
          </span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="badge badge-outline text-xs text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < rating.number ? "text-warning" : "text-gray-300"}
            />
          ))}
          <span className="ml-1 text-sm text-gray-600">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
