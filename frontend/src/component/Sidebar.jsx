import React, { useEffect } from 'react'

import { useChatStore } from "../store/useChatStore";
import { Users } from 'lucide-react';

export const Sidebar = () => {
  const {getUsers, users, selectedUser, setSelectedUser, isUserLoading} = useChatStore();

  const onlineUsers = [];

  useEffect(() =>{
    getUsers()
  },[getUsers])

  if(isUserLoading) return <SidebarSkeleton />  


  return (
     <aside className='h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200'>
      <div className='border-b border-base-300 w-full p-5'>
        <div className='flex items-center gap-2'>
          <Users className='size-7' />
          <span className='font-medium hidden lg:block'>Contacts</span>
        </div>
     {/* TODO : Online Filter toggle     */}
      </div>

      <div className='overflow-y-auto w-full py-3'>
        {
          users.map((user) =>{
            <button >

            </button>
          })
        }
      </div>
     </aside>
  )
}

 