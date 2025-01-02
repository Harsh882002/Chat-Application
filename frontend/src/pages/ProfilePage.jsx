import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';

const ProfilePage = () => {

const {authUser, isUpdatingProfile, updateProfile} = useAuthStore();
  const [selectedImg , setSelectedImg] = useState(null);

  return (
    <div className='h-screen pt-20'>
       <div className='max-w-2xl mx-auto p-4 py-8'>
        <div className='bg-base-200 rounded-xl p-6 space-y-8'>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Profile</h1>
            <p>Your Profile Information</p>
          </div>

          {/* avatar upload section  */}
          <div className='flex flex-col items-center gap-4'>
            <div className='relative'>
              <img src= {selectedImg || authUser.profilepic || "avatar.png"}
              alt="profile" 
              className='size-32 rounded-full object-cover border-4'
              />
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default ProfilePage
