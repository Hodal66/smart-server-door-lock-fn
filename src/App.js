import React from "react";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import AboutUs from "./pages/aboutUs/AboutUs";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import LoginPage from "./pages/users/loginPage/LoginPage";
import RegisterPage from "./pages/users/registerPage/RegisterPage";
import AdminPage from "./pages/dashboardPages/adminPage/AdminPage";
import ServerPage from "./pages/dashboardPages/adminPage/ServerPage";
import EditServer from "./pages/dashboardPages/adminPage/EditServer";
import AddServer from "./pages/dashboardPages/adminPage/AddServer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="/server" element={<ServerPage />} />
          <Route path="/add-server" element={<AddServer/>} />
          <Route path="/server/:editServerId" element={<EditServer />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
