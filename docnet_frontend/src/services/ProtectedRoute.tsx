import { Navigate } from "react-router-dom";
import { useAuthServiceContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useAuthServiceContext();
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  console.log("test");
  return <>{children}</>; // Wrapping children in a React fragment
};

export default ProtectedRoute;
