import React from 'react'
import NotificationsList from '../../components/Admin/notification/NotificationList';
import NotificationForm from '../../components/Admin/notification/NotificationForm';
import { SearchBar, TopBar } from '../../components/Admin';

function NotificationScreen() {
  return (
    <div className="relative w-full h-full mb-10">
        <NotificationsList />
        <NotificationForm />
    </div>
  )
}

export default NotificationScreen