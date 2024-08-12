import "react-toastify/dist/ReactToastify.min.css";
import React, { Suspense } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loading from "./components/Loading";
import Layout from "./components/Layout/Main";
import DefaultPage from "./components/Default";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DashboardLayout from "./components/Layout/Dashboard";
import Matches from "./components/Matches";
import NotFound from "./components/NotFound";
import DiscoverHeader from "./components/Dashboard/Discover";
import Profile from "./components/UserProfile/Settings/Profile";
import Privacy from "./components/UserProfile/Settings/Privacy";
import ChangePassword from "./components/UserProfile/Edit/ChangePassword";
import Prefrenences from "./components/UserProfile/Settings/Prefrenences";
import Filter from "./components/UserProfile/Filter/Filter";
import EditProfile from "./components/UserProfile/Edit/Profile";
import Stories from "./components/UserProfile/Story/Story";
import UserProfile from "./components/UserProfile";
import Subscription from "./components/UserProfile/Pages/Subscription";
import CreateGroup from "./components/CreateGroup/CreateGroup";
import Reject from "./components/UserProfile/Pages/Reject";
import Sent from "./components/UserProfile/Pages/Sent";
import Received from "./components/UserProfile/Pages/Recived";
import Messages from "./components/UserProfile/Pages/Messages";
import Accept from "./components/UserProfile/Pages/Accept";
import GroupList from "./components/groups/Groups";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
        <ToastContainer newestOnTop={true} theme="colored" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<DefaultPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/dashboard/discover"
                  element={<DiscoverHeader title="Discover" />}
                />
                <Route
                  path="/dashboard/matches"
                  element={<Matches title="Matches" />}
                />
                <Route
                  path="/dashboard/matches/qualification"
                  element={<Matches title="Qualification" />}
                />
                <Route
                  path="/dashboard/matches/location"
                  element={<Matches title="Location" />}
                />
                <Route
                  path="/dashboard/matches/designation"
                  element={<Matches title="Designation" />}
                />
                <Route
                  path="/dashboard/matches/my"
                  element={
                    <Matches title="Viewed my profile" profileView={true} />
                  }
                />
                <Route
                  path="/dashboard/matches/upgrade"
                  element={<Matches upgrade={true} />}
                />
              </Route>
              <Route path="/dashboard/groups" element={<GroupList />} />
              <Route path="/dashboard/userprofile" element={<UserProfile />} />
              <Route path="/dashboard/@me/profile" element={<Profile />} />
              <Route path="/dashboard/@me/privacy" element={<Privacy />} />
              <Route path="/dashboard/@me/filter" element={<Filter />} />
              <Route path="/dashboard/@me/edit" element={<EditProfile />} />
              <Route path="/dashboard/story" element={<Stories />} />
              <Route path="/dashboard/@me/reject" element={<Reject />} />
              <Route path="/dashboard/@me/messages" element={<Messages />} />
              <Route path="/dashboard/@me/accept" element={<Accept />} />
              <Route
                path="/dashboard/@me"
                element={<UserProfile OwnProfile={true} />}
              />
              <Route
                path="/dashboard/@me/subscription"
                element={<Subscription />}
              />
              <Route
                path="/dashboard/story/upgrade"
                element={<Stories upgrade={true} />}
              />
              <Route
                path="/dashboard/@me/changepass"
                element={<ChangePassword />}
              />
              <Route
                path="/dashboard/@me/preferences"
                element={<Prefrenences />}
              />
              <Route
                path="/dashboard/@me/creategroup"
                element={<CreateGroup />}
              />
              <Route
                path="/dashboard/@me/received"
                element={<Received sidemenutitle={"Received"} />}
              />
              <Route path="/dashboard/@me/sent" element={<Sent />} />
              <Route
                path="/dashboard/@me/shortlist"
                element={<Received sidemenutitle={"Shortlist"} />}
              />
              <Route
                path="/dashboard/@me/contacted"
                element={<Received sidemenutitle={"Contacted"} />}
              />
              <Route
                path="/dashboard/@me/shortlisted-by"
                element={<Received sidemenutitle={"Shortlisted By"} />}
              />
              <Route
                path="/dashboard/@me/myprofile"
                element={<Received sidemenutitle={"Viewed My Profile"} />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Suspense>
  );
}

export default App;
