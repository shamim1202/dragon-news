import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftAside from "../components/LeftAside/LeftAside";
import Navbar from "../components/Navbar/Navbar";
import RightAside from "../components/RightAside/RightAside";

const MainLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* ---------- Header Section ----------- */}
      <header className="mt-5">
        <Header></Header>
        <section className="md:my-5">
          <LatestNews></LatestNews>
        </section>
        <Navbar></Navbar>
      </header>

      {/* ---------- Main Content Section ----------- */}
      <main className="grid grid-cols-12 md:gap-5">
        {/* ---------- Left Nav ----------- */}
        <aside className="col-span-3 sticky top-5 h-fit">
          <LeftAside></LeftAside>
        </aside>

        <section className="col-span-6">
          <Outlet></Outlet>
        </section>

        {/* ---------- Right Nav ----------- */}
        <aside className="col-span-3 sticky top-5 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
