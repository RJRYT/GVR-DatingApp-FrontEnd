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
          <Route path="/admin/" element={<Navigate to={"admin/dashboard"} />} />
          <Route index path="admin/dashboard" element={<MainScreen />} />
          <Route path="admin/profile" element={<EditProfileScreen />} />
          <Route path="admin/users" element={<UserManagementScreen />} />
          <Route path="admin/users/profile" element={<UserProfileScreen />} />
          <Route path="admin/subscription" element={<SubscriptionScreen />} />
          <Route path="admin/notification" element={<NotificationScreen />} />
          <Route path="admin/notification/settings" element={<NotificationSettingsScreen />} />
          <Route path="admin/accounts" element={<AccountsScreen />} />
          <Route path="admin/finance" element={<FinancialManagementScreen />} />
        </Route>
        <Route path="*" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  )
};

export default AdminRouting;