import React, { useState, useEffect, useCallback, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import LoadingOverlay from "../Loading/LoadingOverlay";
import AccessDenied from "../AccessDenied";
import apiInstance from "../../Instance/Axios";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

import Topbar from "./Topbar";
import Filter from "./Filter";
import MatchGrid from "./MatchGrid";
import Upgrade from "./Upgrade";

const Matches = ({
  title = "",
}) => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState([]);
  const [connectCount, setConnectCount] = useState(0);
  const [likesCount, setLikesCount] = useState(0);
  const [matchesCount, setMatchesCount] = useState(0);
  const { authState, loading } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(false);

  const calculateMatchesCount = (matches) =>{
    setMatchesCount(matches.length || 0);
    let connects = 0, likes = 0;
    const connectedUsers = authState.user?.friends || [];
    const likedUsers = authState.user?.shortlists || [];
    matches.forEach(match => {
      const matchUserId = match.id || match._id;
      if(connectedUsers.includes(matchUserId)){
        connects++;
      }
      if(likedUsers.includes(matchUserId)){
        likes++;
      }
    });
    setConnectCount(connects)
    setLikesCount(likes)
  };

  const fetchMatches = useCallback(async () => {
    try {
      const response = await apiInstance.get("/matches/me");
      if (response.data.success) {
        calculateMatchesCount(response.data.matches);
        setMatches(response.data.matches);
      }else{
        toast.warn("Preferences is not updated.");
        navigate("/dashboard/preferences");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingOverlay(false);
    }
  }, []);

  useEffect(() => {
    if (!loading && authState.isAuthenticated) fetchMatches();
  }, [fetchMatches, loading, authState]);

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      {loadingOverlay && <LoadingOverlay />}
      <div className="min-h-screen p-4 aldrich-regular">
        <Topbar title={title} />
        <Filter connect={connectCount} likes={likesCount} />
        <div className="text-lg font-bold text-[#4b164c] mt-4 pl-2">
          Your Matches <span className="text-pink-500">{matchesCount}</span>
        </div>
        <section className="mt-8">
          <MatchGrid matches={matches}/>
          {!authState?.user?.primeUser && <Upgrade />}
        </section>
      </div>
    </>
  );
};

export default Matches;
