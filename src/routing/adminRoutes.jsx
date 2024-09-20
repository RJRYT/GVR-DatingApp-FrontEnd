import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainScreen from "../screens/main-screen/MainScreen";
import EditProfileScreen from "../screens/edit-profile-screen/EditProfileScreen";
import AdminLayout from "../components/Layout/AdminLayout";
import UserManagementScreen from "../screens/user-management-screen/UserManagementScreen";
import UserProfileScreen from "../screens/user-profile-screen/UserProfileScreen";
import SubscriptionScreen from "../screens/subscription-screen/SubscriptionScreen";
import NotificationScreen from "../screens/notification-screen/NotificationScreen";
import NotificationSettingsScreen from "../screens/notification-settings-screen/NotificationSettingsScreen";
import ErrorScreen from "../screens/error-screen/ErrorScreen";
import LoginScreen from "../screens/login-screen/LoginScreen";
import AccountsScreen from "../screens/accounts-screen/AccountsScreen";
import FinancialManagementScreen from "../screens/financial-management-screen/FinancialManagementScreen";

function AdminRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<LoginScreen />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/" element={<Navigate to={"admin/dashboard"} />} />
          <Route index path="dashboard" element={<MainScreen />} />
          <Route path="profile" element={<EditProfileScreen />} />
          <Route path="users" element={<UserManagementScreen />} />
          <Route path="users/profile" element={<UserProfileScreen />} />
          <Route path="subscription" element={<SubscriptionScreen />} />
          <Route path="notification" element={<NotificationScreen />} />
          <Route path="notification/settings" element={<NotificationSettingsScreen />} />
          <Route path="accounts" element={<AccountsScreen />} />
          <Route path="finance" element={<FinancialManagementScreen />} />
        </Route>
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  )
};