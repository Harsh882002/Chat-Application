import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIng: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth : ", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account is created Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIng: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isLoggingIng: false });
    }
  },

  
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged Out Successfully ");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async (data) =>{
    set({isUpdatingProfile : true});
    try {
      const res = await axiosInstance.put("/auth/update-profile",data);
      set({authUser: res.data});
      toast.success("profile updates successfully")
    } catch (error) {
      console.log("error in update profile :", error);
      toast.error(error.response.data.message);
    }finally{
      set({isUpdatingProfile: false});
    }
  }
}));
