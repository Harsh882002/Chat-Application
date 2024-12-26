import { axiosInstance } from "../lib/axios";
import {create} from "zustand"
 
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
    } finally{
        set({isCheckingAuth: false});
    }
  },
}));