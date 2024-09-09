import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Switch from "react-switch";
import Navbar from "../../Dashboard/Navbar";
import apiInstance from "../../../Instance/Axios";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Loading from "../../Loading";
import AccessDenied from "../../AccessDenied";
import { AuthContext } from "../../../contexts/AuthContext";

const PrivacySettings = () => {
  const [lastSignIn, setLastSignIn] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [twoFASecret, setTwoFASecret] = useState('');
  const [twoFACode, setTwoFACode] = useState('');  // For entering the 2FA code
  const [error, setError] = useState(''); // To display errors
  const [sessions, setSessions] = useState([]); // State to hold user sessions
  const { loading, authState } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(true);

  useEffect(() => {
    apiInstance.get('/users/privacy')
      .then(response => {
        const data = response.data;
        setLastSignIn(data.lastSignInTime + " " + data.lastDeviceName + " " + data.lastIpAddress);
        setTwoFactorEnabled(data.twoFactorEnabled);
      })
      .catch(error => {
        console.error('Error fetching user settings:', error);
      });

    // Fetch user sessions
    apiInstance.get('/users/sessions')
      .then(response => {
        setSessions(response.data);
      })
      .catch(error => {
        console.error('Error fetching sessions:', error);
      }).finally(() => {
        setLoadingOverlay(false);
      });
  }, []);

  const handleTwoFactorChange = (enabled) => {
    if (enabled) {
      setLoadingOverlay(true);
      apiInstance.get('/users/privacy/2fa/generate')
        .then(response => {
          setQrCodeUrl(response.data.qrCodeUrl);
          setTwoFASecret(response.data.secret);
          setIsModalOpen(true);
        })
        .catch(error => {
          console.error('Error generating 2FA QR code:', error);
        }).finally(() => {
          setLoadingOverlay(false);
        });
    } else {
      setIsModalOpen(true);
    }
  };

  const confirmTwoFactorChange = (enabled) => {
    setLoadingOverlay(true);
    if (!enabled) {
      apiInstance.post('/users/privacy/2fa', { twoFactorEnabled: enabled })
        .then(response => {
          setTwoFactorEnabled(enabled);
          setIsModalOpen(false);
        })
        .catch(error => {
          console.error('Error updating 2FA status:', error);
        }).finally(() => {
          setLoadingOverlay(false);
        });
    } else {
      apiInstance.post('/users/privacy/2fa/verify', { token: twoFACode })
        .then(response => {
          if (response.data.success) {
            setTwoFactorEnabled(true);
            setIsModalOpen(false);
          } else {
            setError('Invalid 2FA code.');
          }
        })
        .catch(error => {
          console.error('Error verifying 2FA code:', error);
        }).finally(() => {
          setLoadingOverlay(false);
        });
    }
  };

  const cancelTwoFactorChange = () => {
    setIsModalOpen(false);
  };

  const handleResetAllSessions = () => {
    setLoadingOverlay(true);
    apiInstance.delete('/users/sessions')
      .then(() => {
        setSessions([]); // Clear the sessions list after deletion
      })
      .catch(error => {
        console.error('Error resetting sessions:', error);
      }).finally(()=>{
        setLoadingOverlay(false);
      });
  };

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      {loadingOverlay && <LoadingOverlay />}
      <div className="items-center justify-center min-h-screen bg-fuchsia-950">
        <div className="flex p-6">
          <button className="rounded-full border-white border-2 p-2 bg-[#DD88CF] ml-4">
            <FaSearch className="text-white" />
          </button>
          <h3 className="flex-1 text-center text-white text-2xl font-bold">
            Privacy & Settings
          </h3>
        </div>
        <div className="bg-white rounded-t-3xl min-h-[calc(100vh - 30px)] p-6 mt-4">
          <div className="w-full flex justify-center mb-1">
            <div className="w-5 rounded-full md:w-10 lg:w-16 h-1 bg-gray-200 border-2"></div>
          </div>
          <div className="flex p-6">
            <label className="font-medium">Sign-in Email</label>
            <p className="flex-1 text-right ">{authState.user.email || ""}</p>
          </div>
          <div className="flex px-6 py-2 border-b">
            <label className="font-medium">Password</label>
            <Link
              to="/dashboard/profile/changepass"
              className="flex-1 text-right"
            >
              <p className="text-blue-600 font-bold"> Change Password</p>
            </Link>
          </div>
          <div className="flex px-6 pt-6">
            <label className="font-medium">2-FA authentication</label>
            <Switch
              checked={twoFactorEnabled}
              onChange={() => handleTwoFactorChange(!twoFactorEnabled)}
              onColor="#701a75"
              offColor="#E5E7EB"
              onHandleColor="#ffffff"
              offHandleColor="#ffffff"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={20}
              width={36}
              className="react-switch ml-auto"
            />
          </div>
          <div className="flex p-6">
            <label className="font-medium">Phone number</label>
            <p className="flex-1 text-right ">{authState.user.phoneNumber || "Not added yet"}</p>
          </div>
          <div className="px-6 pt-6">
            <label className="font-semibold">Last sign in</label>
            <p className="text-sm py-6">
              {lastSignIn}
            </p>
          </div>
          <div className="px-6 pt-6 border-b">
            <label className="font-medium">Active Sessions({sessions.length})</label>
            {sessions.length > 0 ? (
              sessions.map((session, index) => (
                <div key={index} className="mb-2">
                  <p className="font-sm">
                    <span>{session.deviceInfo || 'Unknown Device'}</span> - {session.ipAddress || 'Unknown IP'}
                  </p>
                  <p className="text-sm text-gray-600">Last Active: {new Date(session.lastActiveAt).toLocaleString()}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-600">No active sessions.</p>
            )}
          </div>
          <div className="p-6 flex pb-24">
            <button
              className="bg-fuchsia-950 text-white p-2 rounded-md ml-auto"
              onClick={handleResetAllSessions}
            >
              + Reset all active sessions
            </button>
          </div>
        </div>
      </div>
      <Navbar />

      {isModalOpen && (
        <div style={{ wordBreak: "break-word" }} className="fixed break-words inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">
              {twoFactorEnabled ? 'Disable 2FA' : 'Enable 2FA'}
            </h2>
            {twoFactorEnabled ? (
              <p className="mb-6">
                Are you sure you want to disable 2-Factor Authentication?
              </p>
            ) : (
              <>
                <p className="mb-4">
                  Scan the QR code below with your authenticator app:
                </p>
                <img src={qrCodeUrl} alt="QR Code for 2FA" className="mb-4" />
                <p className="text-sm text-gray-600 mb-4">
                  Alternatively, you can use this secret: {twoFASecret}
                </p>
                <input
                  type="text"
                  value={twoFACode}
                  onChange={(e) => setTwoFACode(e.target.value)}
                  placeholder="Enter 2FA code"
                  className="border rounded p-2 w-full"
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </>
            )}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                onClick={cancelTwoFactorChange}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-fuchsia-950 text-white rounded hover:bg-fuchsia-800"
                onClick={() => confirmTwoFactorChange(!twoFactorEnabled)}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PrivacySettings;
