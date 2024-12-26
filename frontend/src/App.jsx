import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import SettingdPage from "./pages/SettingdPage";
import ProfilePage from "./pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";
import {Loader} from "lucide-react"

const App = () => {
  const { authUser, checkAuth,isChekingAuth } = useAuthStore();

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
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingdPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
};

export default App;
