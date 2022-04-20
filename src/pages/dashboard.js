import { Link, useNavigate, Outlet } from "react-router-dom";

export default function DashboardPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    return (
        <div> 
            <h1>Dashboard</h1>

            <button on onClick={handleClick}>
                Logout
            </button>

            <Outlet/>

            <Link to='welcome'>Say welcome</Link>
            <br/>
            <Link to='goodbye'>Say goodbye</Link>
        </div>
    )
}