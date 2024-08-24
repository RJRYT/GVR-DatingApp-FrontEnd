import "react-toastify/dist/ReactToastify.min.css";
import React, { Suspense } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { SocketProvider } from "./contexts/SocketContext";
import { ToastContainer } from "react-toastify";
import Loading from "./components/Loading";
import Routing from "./routing";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
<<<<<<< HEAD
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
              <Route
                path="/dashboard/userprofile/upgrade"
                element={<UserProfile upgrade={true} />}
              />
              <Route path="/dashboard/@me/profile" element={<Profile />} />
              <Route path="/dashboard/@me/privacy" element={<Privacy />} />
              <Route path="/dashboard/@me/filter" element={<Filter />} />
              <Route path="/dashboard/@me/edit" element={<EditProfile />} />
              <Route path="/dashboard/@me/addcard" element={<AddCard />} />
              <Route path="/dashboard/story" element={<Stories />} />
              <Route path="/dashboard/@me/reject" element={<Reject />} />
              <Route path="/dashboard/@me/messages" element={<Messages />} />
              <Route path="/dashboard/@me/chat" element={<ChatBox />} />
              <Route path="/dashboard/@me/accept" element={<Accept />} />
              <Route
                path="/dashboard/@me"
                element={<UserProfile OwnProfile={true} />}
              />
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
              <Route
                path="/dashboard/@me/preferences/:userId"
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
              <Route path="/403" element={<AccessDenied />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
=======
        <SocketProvider>
          <ToastContainer newestOnTop={true} theme="colored" />
          <Routing />
        </SocketProvider>
>>>>>>> 62ac446f4a12d7cc3b4fc0f488be184e5f3042f7
      </AuthProvider>
    </Suspense>
  );
}

export default App;