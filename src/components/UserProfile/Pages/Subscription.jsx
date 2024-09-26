import React, { useState, useContext, useEffect, useCallback } from "react";
import { BiRupee } from "react-icons/bi";
import { BsCheck } from 'react-icons/bs';
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Loading from "../../Loading";
import AccessDenied from "../../AccessDenied";
import axios from "../../../Instance/Axios";

const Subscription = () => {
  const [plan, setPlan] = useState(null);
  const { authState, loading } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(true);

  const fetchPlan = useCallback(async () => {
    try {
      const response = await axios.get("/users/plan");
      if (response.data.success) {
        setPlan(response.data.plan);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingOverlay(false);
    }
  }, []);

  useEffect(() => {
    fetchPlan();
  }, [fetchPlan]);

  if (loading) return <Loading />;

  if (!loading && !authState.isAuthenticated) return <AccessDenied />;

  return (
    <>
      {loadingOverlay && <LoadingOverlay />}
      <div className="items-center justify-center min-h-screen bg-fuchsia-950  ">
        <div className=" p-8 text-center">
          <h3 className=" text-white text-xl font-semibold">Subscription Plan</h3>
        </div>
        {plan && <div className="bg-black rounded-t-3xl min-h-screen p-8  mt-4 font-sans">
          <div className="flex text-white">
            <h4 className="text-3xl font-semibold">{plan.name}</h4>
          </div>
          <div className="text-center text-5xl text-white font-bold flex pt-4 ">
            <BiRupee className="inline-block" />
            {plan.price}/-<span className="text-3xl font-normal pt-2">{plan.duration}</span>
          </div>
          <div className="space-y-4 p-8 text-white pb-4">
            <div className="flex items-start border-b ">
              <BsCheck className="mr-2 bg-white rounded-full text-black mt-2" />
              <div className="pl-2">
                <p className="text-sm pb-4">{plan.description}</p>
              </div>
            </div>
          </div>
          <div className="text-center ">
            <Link
              to={"/dashboard/@me/payment"}
              className="text-white bg-neutral-700 px-24 py-4 rounded-full text-xl "
            >
              Subscribe
            </Link>
          </div>
        </div>}
      </div>
    </>
  );
};

export default Subscription;
