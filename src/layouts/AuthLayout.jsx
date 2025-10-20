import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";

const AuthLayout = () => {
    return (
        <div className="bg-base-200 min-h-screen">
            <div className="max-w-7xl mx-auto md:pt-6">
                <Navbar></Navbar>
            </div>
            <main className="max-w-7xl mx-auto">
                <Outlet></Outlet>
            </main>

        </div>
    );
};

export default AuthLayout;