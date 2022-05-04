import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";
import loadIcon from "../img/loadIcon.svg";
import Navbar from "./Navbar";

export function ProtectedRoute({children}) {
    const {user, loading } = useAuth();

    if(loading) return (
        <><Navbar />
            <section className="container-dashboard">
                <h1>Loading...</h1>
                <img class="load-icon" src={loadIcon} alt="load-icon" />
            </section>
        </>);

    if(!user) return <Navigate to="/" />;

    return <>{children}</>;
}