import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthImagePattern } from "../component/AuthImagePattern";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIng } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen grid lg: grid-cols-2">
      {/* Left Side    */}
      <div className="flex flex-col justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Logo  */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-1 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content">Sign in to your account</p>
            </div>

            {/* Form  */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email</span>
                </label>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-base-content/40" />
                  </div>

                  <input
                    type="email"
                    className={`input input-bordered w-full pl-10`}
                    placeholder="you@gmail.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-base-content  " />
                  </div>

                  <input
                    type={showPassword ? "text" : "password"}
                    className={`input input-bordered w-full pl-10`}
                    placeholder="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />

                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-base-content" />
                    ) : (
                      <Eye className="h-5 w-5 text-base-content" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isLoggingIng}
              >
                {isLoggingIng ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading.....
                  </>
                ) : (
                  "sign in "
                )}
              </button>
            </form>

            {/* //Do not hae account */}
            <div className="text-center mt-6">
              <p className="text-base-content">
                Don&apos;t have an account?{" "}
                <Link to="/signup" className="link link-primary">
                  {" "}
                  Create Account{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <AuthImagePattern 
      title={"Welcome Back"}
      subtitle={"Sign in to continue your conversations and catch upp with your messages."}
      />
    </div>
  );
};

export default LoginPage;
