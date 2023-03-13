import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser !== null ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
