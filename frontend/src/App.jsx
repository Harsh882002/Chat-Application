import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import SettingPage from "./pages/SettingdPage";
import ProfilePage from "./pages/ProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import {Loader} from "lucide-react"
import {Toaster} from "react-hot-toast"
import { useThemeStore } from "./store/useThemeStore";

const App = () => {
  const { authUser, checkAuth,isChekingAuth , onlineUsers} = useAuthStore();
  const {theme} = useThemeStore();

  console.log({onlineUsers});

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({authUser});

  if(isChekingAuth && !authUser)  return(
    <div className="flex items-center justify-center h-screen">
      <Loader className="size-10  animate-spin" />
    </div>
  )

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={ !authUser ? <SignUp /> : <Navigate to="/" />} />
      
        <Route path="/login" element={ !authUser ? <LoginPage /> : <Navigate to="/"  />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="/profile" element={ authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
