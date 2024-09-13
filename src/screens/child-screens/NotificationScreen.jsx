import React from 'react'
import NotificationsList from '../../components/Admin/notification/NotificationList';
import NotificationForm from '../../components/Admin/notification/NotificationForm';
import { SearchBar, TopBar } from '../../components/Admin';

function NotificationScreen() {
  return (
    <div className="relative w-[90%] h-full mb-10 mx-auto">
        <TopBar/>
         <SearchBar/>
        <NotificationsList />
        <NotificationForm />
    </div>
  )
}

export default NotificationScreen