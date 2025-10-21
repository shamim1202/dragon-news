import { useContext } from "react";
import { Navigate } from "react-router";
import Loading from "../components/Loading/Loading";
import { authContext } from "./AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  if(loading){
    return <Loading></Loading>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
};

export default PrivateRoute;
