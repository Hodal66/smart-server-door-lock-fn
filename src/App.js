import React from "react";
import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import AboutUs from "./pages/aboutUs/AboutUs";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import LoginPage from "./pages/users/loginPage/LoginPage";
import RegisterPage from "./pages/users/registerPage/RegisterPage";
import AdminPage from "./pages/dashboardPages/adminPage/AdminPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/register-page" element={<RegisterPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
