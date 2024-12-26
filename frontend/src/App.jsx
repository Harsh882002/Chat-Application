import React, { useEffect } from "react";
import Navbar from "./component/Navbar";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LoginPage from "./pages/LoginPage";
import SettingdPage from "./pages/SettingdPage";
import ProfilePage from "./pages/ProfilePage";
import { Navigate, Route, Routes } from "react-router-dom";
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
        <Route path="/" element={ authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={ authUser ? <SignUp /> : <Navigate to="/" />} />
        <Route path="/login" element={ authUser ? <LoginPage /> : <Navigate to="/"  />} />
        <Route path="/settings" element={<SettingdPage />} />
        <Route path="/profile" element={ authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
