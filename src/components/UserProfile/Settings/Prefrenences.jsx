import React, { useEffect, useState, useContext, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import Slider from "../Components/Slider";
import Select from "../../UserProfile/Components/Select";
import Navbar from "../../Dashboard/Navbar";
import axiosInstance from "../../../Instance/Axios"
import LoadingOverlay from "../../Loading/LoadingOverlay";
import Loading from "../../Loading";
import AccessDenied from "../../AccessDenied";
import { AuthContext } from "../../../contexts/AuthContext";
import {
  locations,
  interests,
  hobbies,
  qualifications,
  lifestyleChoices,
  religions,
  occupations
} from "../../../assets/static/Data";
import { toast } from "react-toastify";

function PrefrenencesSettings() {
  const { authState, loading } = useContext(AuthContext);
  const [loadingOverlay, setLoadingOverlay] = useState(true);
  const [preferences, setPreferences] = useState({
    AgeRange: { min: 18, max: 35 },
    HeightRange: { min: 100, max: 220 },
    WeightRange: { min: 40, max: 150 },
    Gender: null,
    Location: [],
    Interests: [],
    Hobbies: [],
    Education: [],
    Religion: null,
    Occupation: null,
    Relation: null,
    LifeStyle: []
  })

  // Generic slider change handler
  const handleSliderChange = (value, type) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [type]: { min: value[0], max: value[1] },
    }));
  };

  // Generic change handler for Select components
  const handleSelectChange = (selectedOption, type) => {
    setPreferences((prevPreferences) => ({
      ...prevPreferences,
      [type]: selectedOption || null
    }));
  };

  const addPreferences = useCallback(async (e) => {
    e.preventDefault();
    setLoadingOverlay(true);
    try {
      const response = await axiosInstance.post("/matches/preferences", preferences);
      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error occurred: ${error.message}`);
    } finally {
      setLoadingOverlay(false);
    }
  },[]);

  const fetchPreferences = useCallback(async()=>{
    try {
      setLoadingOverlay(true);
      const response = await axiosInstance.get("/matches/preferences");
      if (response.data.success) {
        setPreferences(response.data.preferences)
      } else {
        console.error("Preferences data is missing or incorrect.");
      }
    } catch (error) {
      console.error("API Error:", error)
    } finally {
      setLoadingOverlay(false);
    }
  },[]);

  useEffect(() => {
    if (!loading && authState.isAuthenticated) fetchPreferences();
  }, [fetchPreferences, loading, authState]);

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
            Preferences
          </h3>
        </div>
        <div className="bg-white rounded-t-3xl min-h-[calc(100vh - 30px)] p-6 mt-4">
          <div className="w-full flex justify-center mb-1">
            <div className="w-5 rounded-full md:w-10 lg:w-16 h-1 bg-gray-200 border-2"></div>
          </div>
          <div className="w-full flex justify-center mb-1">
            <div className="text-black mt-2 text-lg">Partner Preferences</div>
          </div>
          <form onSubmit={addPreferences} className="flex w-full md:w-[calc(100%-46px)] flex-col gap-5 items-center mx-0 md:mx-5">
            <div className="w-full md:w-2/3">
              <div className="flex">
                <span className="mr-auto">Age</span>
                <span className="ml-auto">
                  {preferences.AgeRange ? `${preferences.AgeRange.min}-${preferences.AgeRange.max}` : 'Loading...'}
                </span>
              </div>
              <Slider
                min={18}
                max={35}
                value={[preferences.AgeRange.min || 18, preferences.AgeRange.max || 35]}
                onChange={(selectedOption) => handleSliderChange(selectedOption, 'AgeRange')}
              />
            </div>
            <div className="w-full md:w-2/3">
              Gender
              <Select
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'Gender')}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Famale", value: "female" },
                  { label: "Both", value: "both" },
                ]}
                value={preferences.Gender}
              />
            </div>
            <div className="w-full md:w-2/3">
              Locations
              <Select
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'Location')}
                options={locations}
                isMulti={true}
                value={preferences.Location}
              />
            </div>
            <div className="w-full md:w-2/3">
              Interests
              <Select
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'Interests')}
                options={interests}
                isMulti={true}
                value={preferences.Interests}
              />
            </div>
            <div className="w-full md:w-2/3">
              Hobbies
              <Select
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'Hobbies')}
                options={hobbies}
                isMulti={true}
                value={preferences.Hobbies}
              />
            </div>
            <div className="w-full md:w-2/3">
              Relationship Goals
              <Select
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'Relation')}
                options={[
                  { label: "Short Term Relationship", value: "shortTerm" },
                  { label: "Long Term Relationship", value: "longTerm" },
                ]}
                value={preferences.Relation || null}
              />
            </div>
            <div className="w-full md:w-2/3">
              Education level
              <Select
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'Education')}
                options={qualifications}
                isMulti={true}
                value={preferences.Education}
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex">
                <span className="mr-auto">Height</span>
                <span className="ml-auto">
                  {preferences.HeightRange ? `${preferences.HeightRange.min}-${preferences.HeightRange.max}` : 'Loading...'}
                </span>
              </div>
              <Slider
                min={100}
                max={220}
                value={[preferences.HeightRange.min || 100, preferences.HeightRange.max || 220]}
                onChange={(value) => handleSliderChange(value, 'HeightRange')}
              />
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex">
                <span className="mr-auto">Weight</span>
                <span className="ml-auto">
                  {preferences.WeightRange ? `${preferences.WeightRange.min}-${preferences.WeightRange.max}` : 'Loading...'}
                </span>
              </div>
              <Slider
                min={40}
                max={150}
                value={[preferences.WeightRange.min || 40, preferences.WeightRange.max || 150]}
                onChange={(value) => handleSliderChange(value, 'WeightRange')}
              />
            </div>
            <div className="w-full md:w-2/3">
              Lifestyle choice
              <Select
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'LifeStyle')}
                options={lifestyleChoices}
                isMulti={true}
                value={preferences.LifeStyle}
              />
            </div>
            <div className="w-full md:w-2/3">
              Religion
              <Select
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'Religion')}
                options={religions}
                value={preferences.Religion}
              />
            </div>
            <div className="w-full md:w-2/3">
              Occupation
              <Select
                onChange={(selectedOption) => handleSelectChange(selectedOption, 'Occupation')}
                options={occupations}
                value={preferences.Occupation} />
            </div>
            <div className="text-center pb-24">
              <button type="submit" className="bg-fuchsia-950 font-semibold text-white rounded-full py-4 px-24 bottom-0 mt-6">
                Add Preferences
              </button>
            </div>
          </form>
        </div>
      </div>
      <Navbar />
    </>
  );
}

export default PrefrenencesSettings;
