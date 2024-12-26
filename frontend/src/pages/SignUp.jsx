import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';

const SignUp = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const {signup, isSigningUp} = useAuthStore();

  const validateForm = () =>{}

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <div>
      <h1>SignUp Page</h1>
    </div>
  )
}

export default SignUp
