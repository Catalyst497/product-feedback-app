'use client'
import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import { useSelector } from 'react-redux'

function ProfileBox() {
    const {user} = useSelector(st => st.user)
    const [emailName, domain] = user?.email.split('@')
  return (
    <div className='p-4 px-8 bg-white flex items-center justify-between rounded-lg mb-8'>
        <div>
        <img src="./avatar.jpg" alt="" className="avatar-img w-[2rem] md:w-[3rem] rounded-[40%]" />

        </div>
        <div className='flex-1 justify-self-start px-4'>
            <div className='font-bold capitalize text-[1.5rem]'>{user.username ? user?.username : 'username'}</div>
            <div>{user.email ? `${emailName.substr(0, 2)}...@${domain}` : 'email'}</div>
        </div>
        <div><BsThreeDots /></div>
    </div>
  )
}

export default ProfileBox