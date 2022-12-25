import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import AboutUs from "./pages/aboutUs/AboutUs";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import RegisterPage from "./pages/users/registerPage/RegisterPage";
import AdminPage from "./pages/dashboardPages/adminPages/AdminPage";
// import AdminPage from "./pages/dashboardPages/adminPage/AdminPage";
// import ServerPage from "./pages/dashboardPages/adminPage/ServerPage";
import ServerPage from "./pages/dashboardPages/adminPages/ServerPage";
import EditServer from "./pages/dashboardPages/adminPage/EditServer";
// import UserAdmin from "./pages/dashboardPages/adminPage/UserAdmin";
import UserAdmin from "./pages/dashboardPages/adminPages/UserAdmin";

import AddServerPage from "./pages/dashboardPages/adminPage/AddServerPage";
import AddUserPage from "./pages/dashboardPages/adminPage/AddUserPage";
import LoginPage from "./pages/users/loginPage/LoginPage";
import UserPage from "./pages/dashboardPages/userPage/UserPage";
import AdminServerDetails from "./pages/dashboardPages/adminPage/AdminServerDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/login-page" element={<LoginPage/>} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/server-admin" element={<ServerPage />} />
          <Route path="/add-server-page" element={<AddServerPage/>} />
          <Route path="/add-user-page" element={<AddUserPage/>} />
          <Route path="/admin-server/details/:AllDetalsId" element={<AdminServerDetails/>} />
          <Route path="/user-admin" element={<UserAdmin/>} />
          <Route path="/server/:editServerId" element={<EditServer />} />
          {/* USER PART ROUTE */}
          <Route path="/user-dashboard" element={<UserPage/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
