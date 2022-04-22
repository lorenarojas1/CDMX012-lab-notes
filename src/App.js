import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import SignUpPage from "./pages/signup";
import LoginPage from "./pages/login";
import DashboardPage from "./pages/dashboard";
import DashboardForm from "./pages/dashboardForm";
import UsersPage from "./pages/users";
import UserPage from "./pages/user";
import NotFoundPage from "./pages/NotFound";
import Navbar from "./components/Navbar";

export default function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<WelcomePage/>}/>
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/users" element={<UsersPage/>}/>
        <Route path="/usuarios" element={<Navigate to="/users"/>}/>
        <Route path="/users/:id" element={<UserPage/>}/>
        <Route path="/dashboard/*" element={<DashboardPage/>}>
          <Route path="welcome" element={<p>welcome!!!</p>}/>
          <Route path="goodbye" element={<p>goodbye!!!</p>}/>
        </Route>
        <Route path="/dashboard-form" element={<DashboardForm/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>

    </BrowserRouter>

  )
}