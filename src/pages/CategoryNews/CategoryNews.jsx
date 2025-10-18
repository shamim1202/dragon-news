import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoryNews = () => {
  const { id } = useParams();
  const newsData = useLoaderData();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(newsData);
      return;
    } else if (id == "1") {
      const filteredNews = newsData.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
      return;
    } else {
      const filteredNews = newsData.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [newsData, id]);

  return (
    <div>
      Category - {id} News {categoryNews.length}
    </div>
  );
};

export default CategoryNews;
