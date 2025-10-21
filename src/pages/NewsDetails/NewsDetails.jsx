import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Header from "../../components/Header/Header";
import NewsDetailsCard from "../../components/NewsDetailsCard/NewsDetailsCard";
import RightAside from "../../components/RightAside/RightAside";

const NewsDetails = () => {
  const newsData = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const findNews = newsData.find((news) => news.id == id);
    setNews(findNews);
  }, [newsData, id]);

  return (
    <div className="max-w-7xl mx-auto">
      <header className="md:my-5">
        <Header></Header>
      </header>

      {/* ---------- Main Content Section ----------- */}
      <main className="grid grid-cols-12 md:gap-5 md:mt-6">
        {/* ---------- News Details Content ----------- */}
        <section className="col-span-9">
          <h1 className="md:font-bold text-accent md:py-4">News Details</h1>
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>

        {/* ---------- Right Aside ----------- */}
        <aside className="col-span-3 sticky top-5 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
