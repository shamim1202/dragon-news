import { Outlet } from "react-router";
import Header from "../components/Header/Header";

const MainLayout = () => {
  return (
    <div>
      {/* ---------- Header Section ----------- */}
      <header>
        <Header></Header>
      </header>

      {/* ---------- Main Content Section ----------- */}
      <main>
        {/* ---------- Left Nav ----------- */}
        <section></section>

        <section>
          <Outlet></Outlet>
        </section>

        {/* ---------- Right Nav ----------- */}
        <section></section>
      </main>
    </div>
  );
};

export default MainLayout;
