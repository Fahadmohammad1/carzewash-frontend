import { Navigate, useLocation } from "react-router";

const RequireAuth = ({ children }) => {
    const admin = localStorage.getItem('admin')

    const location = useLocation();

    if (!admin) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;