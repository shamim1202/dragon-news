import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);

  return (
    <div>
      <h1 className="md:font-semibold text-accent md:py-4">
        All Category ({categories.length})
      </h1>

      {/* -------- All Category List -------- */}
      <div className="flex md:flex-col">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className="btn bg-base-100 border-none text-neutral font-semibold hover:bg-base-300 hover:text-accent justify-start md:pl-8"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
