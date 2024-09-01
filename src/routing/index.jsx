import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/Layout/Main";
import DefaultPage from "../components/Default";
import Login from "../components/Login";
import Login2FA from "../components/Login/2FA";
import Dashboard from "../components/Dashboard";
import DashboardLayout from "../components/Layout/Dashboard";
import Matches from "../components/Matches";
import NotFound from "../components/NotFound";
import DiscoverHeader from "../components/Dashboard/Discover";
import Profile from "../components/UserProfile/Settings/Profile";
import Privacy from "../components/UserProfile/Settings/Privacy";
import ChangePassword from "../components/UserProfile/Edit/ChangePassword";
import Prefrenences from "../components/UserProfile/Settings/Prefrenences";
import Filter from "../components/UserProfile/Filter/Filter";
import EditProfile from "../components/UserProfile/Edit/Profile";
import Stories from "../components/UserProfile/Story/Story";
import UserProfile from "../components/UserProfile";
import Subscription from "../components/UserProfile/Pages/Subscription";
import CreateGroup from "../components/groups/CreateGroup";
import Reject from "../components/UserProfile/Pages/Reject";
import Sent from "../components/UserProfile/Pages/Sent";
import Received from "../components/UserProfile/Pages/Recived";
import Messages from "../components/UserProfile/Pages/Messages";
import Accept from "../components/UserProfile/Pages/Accept";
import GroupList from "../components/groups/Groups";
import AddCard from "../components/UserProfile/Settings/AddCard";
import PayMethods from "../components/UserProfile/Pages/PayMethods";
import AccessDenied from "../components/AccessDenied";
import Spin from "../components/Dashboard/Spin";
import ChatBox from "../components/UserProfile/Pages/chat/ChatBox";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/2fa" element={<Login2FA />} />
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
              element={<Matches title="Viewed my profile" profileView={true} />}
            />
            <Route
              path="/dashboard/matches/upgrade"
              element={<Matches upgrade={true} />}
            />
          </Route>
          <Route
            path="/dashboard/profile"
            element={<Navigate to={"/dashboard/profile/@me"} />}
          />
          <Route
            path="/dashboard/profile/edit"
            element={<Navigate to={"/dashboard/profile/@me/edit"} />}
          />
          <Route path="/dashboard/profile/:userId" element={<UserProfile />} />
          <Route path="/dashboard/profile/@me/edit" element={<EditProfile />} />
          <Route
            path="/dashboard/userprofile/upgrade"
            element={<UserProfile upgrade={true} />}
          />
          <Route path="/dashboard/preferences" element={<Prefrenences />} />
          <Route path="/dashboard/requests/sent" element={<Sent />} />
          <Route path="/dashboard/requests/rejected" element={<Reject />} />
          <Route path="/dashboard/requests/accepted" element={<Accept />} />

          {/**split**/}

          <Route path="/dashboard/groups" element={<GroupList />} />
          <Route path="/dashboard/@me/spin" element={<Spin />} />
          <Route path="/dashboard/@me/profile" element={<Profile />} />
          <Route path="/dashboard/@me/privacy" element={<Privacy />} />
          <Route path="/dashboard/@me/filter" element={<Filter />} />
          <Route path="/dashboard/@me/addcard" element={<AddCard />} />
          <Route path="/dashboard/story" element={<Stories />} />
          <Route path="/dashboard/@me/messages" element={<Messages />} />
          <Route path="/dashboard/@me/chat" element={<ChatBox />} />
          <Route
            path="/dashboard/@me/subscription"
            element={<Subscription />}
          />
          <Route path="/dashboard/@me/payment" element={<PayMethods />} />
          <Route
            path="/dashboard/story/upgrade"
            element={<Stories upgrade={true} />}
          />
          <Route
            path="/dashboard/@me/changepass"
            element={<ChangePassword />}
          />
          <Route path="/dashboard/@me/creategroup" element={<CreateGroup />} />
          <Route
            path="/dashboard/@me/received"
            element={<Received sidemenutitle={"Received"} />}
          />
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
          <Route path="/403" element={<AccessDenied />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;