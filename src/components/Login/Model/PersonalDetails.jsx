import React, { useState, useContext, useEffect } from "react";
import axiosInstance from "../../../Instance/Axios";
import { AuthContext } from "../../../contexts/AuthContext";
import ImageUpload from "../Components/Upload/ImageUpload";
import ProfilePicUpload from "../Components/Upload/ProfilePicUpload";
import ReelUpload from "../Components/Upload/ReelUpload";
import MultiSelect from "../Components/Select/MultiSelect";
import SingleSelect from "../Components/Select/SingleSelect";
import { toast } from "react-toastify";
import {
  drinkingHabits,
  gender,
  hobbies,
  locations,
  interests,
  qualifications,
  smokingHabits,
} from "../../../assets/static/Data";

const PersonalDetails = ({ isVisible, modelToggle, setLoading }) => {
  const [profilePicSelected, setProfilePicSelected] = useState(false);
  const [shortReelSelected, setShortReelSelected] = useState(false);
  const [imagesSelected, setImagesSelected] = useState(false);
  const [locationClicked, setLocationClicked] = useState(false);
  const [errors, setErrors] = useState({});
  const { authState, updateUser, loading } = useContext(AuthContext);
  const [uploadFiles, setUploadFiles] = useState({
    images: [],
    profilepic: null,
    shortreels: null,
  });
  const [formData, setFormData] = useState({
    age: "",
    dateOfBirth: "",
    gender: "",
    location: {
      latitude: 0,
      longitude: 0,
      shortName: "",
      name: "",
    },
    hobbies: [],
    interests: [],
    smokingHabits: "",
    drinkingHabits: "",
    qualification: [],
  });

  const getLocation = () => {
    setLocationClicked(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude, accuracy } = position.coords;

          // Check if the accuracy is too high (not accurate)
          const accuracyThreshold = 500; // Adjust based on your desired accuracy in meters
          if (accuracy > accuracyThreshold) {
            // Show standard location method if the accuracy is too high
            setErrors((prevErrors) => ({
              ...prevErrors,
              location: 'Location accuracy is too low. Please select location manually.',
            }));
            // Optionally trigger fallback to standard location selection here
          } else {
            // Accuracy is acceptable, proceed with geolocation
            const placeName = await getPlaceName(latitude, longitude);
            const placeData = {
              latitude,
              longitude,
              shortName: placeName.split(",")[0],
              name: placeName,
            };

            setFormData((prevFormData) => ({
              ...prevFormData,
              location: placeData,
            }));

            // Clear any previous location errors
            setErrors((prevErrors) => ({
              ...prevErrors,
              location: null,
            }));
          }
        },
        (error) => {
          // Handle different geolocation errors
          let errorMessage = "";

          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location permission denied. Switching to manual location selection.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable. Switching to manual location selection.";
              break;
            case error.TIMEOUT:
              errorMessage = "Request to get your location timed out. Switching to manual location selection.";
              break;
            default:
              errorMessage = "An unknown error occurred. Switching to manual location selection.";
              break;
          }

          // Set the error message and log it
          console.log("Location error: ", error);
          setErrors((prevErrors) => ({
            ...prevErrors,
            location: errorMessage,
          }));

          // Optional: display an alert to the user as well
          alert(errorMessage);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        }
      );
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        location: "Geolocation is not supported by this browser.",
      }));
    }
  };

  const getPlaceName = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&accept-language=en&lat=${latitude}&lon=${longitude}`);
      if (response.ok) {
        const data = await response.json();
        return data.display_name;
      } else {
        return "unKnown place"
      }
    } catch (error) {
      console.error('Error fetching place name:', error);
      return 'unKnown place';
    }
  };

  const getCoordsByName = async (placeName) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(placeName)}&format=json&accept-language=en&dedupe=0&limit=3`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (!data.length) return {};
        return data[0];
      } else {
        return {};
      }
    } catch (error) {
      console.error('Error fetching place coords:', error);
      return {};
    }
  }

  useEffect(() => {
    if (!loading && !authState.isAuthenticated) modelToggle();
  }, [loading, authState]);

  const validateForm = () => {
    const newErrors = {};

    // age validation
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 20 || formData.age > 40) {
      newErrors.age = "Age must be between 20 and 40.";
    }

    // dateOfBirth validation
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "date Of Birth is required";
    }

    if (formData.age && formData.dateOfBirth) {
      const calculatedAge =
        new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();

      if (calculatedAge !== parseInt(formData.age, 10)) {
        newErrors.age = "Age and date of birth do not match.";
        newErrors.dateOfBirth = "Age and date of birth do not match.";
      }
    }

    // gender validation
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }

    // // location validation
    if (!formData.location.shortName) {
      newErrors.location = "Location is required";
    }

    // hobbies validation
    if (!formData.hobbies.length) {
      newErrors.hobbies = "Hobbies is required";
    }

    // interests validation
    if (!formData.interests.length) {
      newErrors.interests = "Interests is required";
    }

    // smokingHabits validation
    if (!formData.smokingHabits) {
      newErrors.smokingHabits = "smoking Habits is required";
    }

    // drinkingHabits validation
    if (!formData.drinkingHabits) {
      newErrors.drinkingHabits = "drinking Habits is required";
    }

    // qualification validation
    if (!formData.qualification.length) {
      newErrors.qualification = "Qualification is required";
    }

    // profile pic validation
    if (!profilePicSelected) {
      newErrors.profilePic = "profilePic is required";
    }

    // images validation
    if (!imagesSelected) {
      newErrors.images = "Images is required";
    }

    // Short reel validation
    if (!shortReelSelected) {
      newErrors.shortReel = "shortReel is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    //special case(location)
    if (name === "location") {
      const { 
        lat = 0, 
        lon = 0, 
        name = "", 
        display_name = "" } = await getCoordsByName(value);
      setFormData({ 
        ...formData, 
        location: { 
          latitude:lat, 
          longitude:lon, 
          shortName: name ? name : value, 
          name: display_name ? display_name : value 
        } 
      });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleImagesSubmit = async (images) => {
    if (images.length > 5) {
      toast.error("You can only choose upto 5 images");
      return;
    }
    setUploadFiles({ ...uploadFiles, images });
  };

  const handleProfilePicSubmit = async (ProfilePic) => {
    setUploadFiles({ ...uploadFiles, profilepic: ProfilePic });
  };

  const handleShortReelSubmit = async (shortReel) => {
    setUploadFiles({ ...uploadFiles, shortreels: shortReel });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const formDataToSend = new FormData();

      // Append the regular form fields
      formDataToSend.append("age", formData.age);
      formDataToSend.append("dateOfBirth", formData.dateOfBirth);
      formDataToSend.append("gender", formData.gender);
      formDataToSend.append("location", JSON.stringify(formData.location));
      formDataToSend.append("smokingHabits", formData.smokingHabits);
      formDataToSend.append("drinkingHabits", formData.drinkingHabits);
      formDataToSend.append("hobbies", JSON.stringify(formData.hobbies));
      formDataToSend.append("interests", JSON.stringify(formData.interests));
      formDataToSend.append(
        "qualification",
        JSON.stringify(formData.qualification)
      );

      // Append the file fields
      formDataToSend.append("shortreels", uploadFiles.shortreels);
      formDataToSend.append("profilepic", uploadFiles.profilepic);
      uploadFiles.images.forEach((image) => {
        formDataToSend.append("images", image);
      });
      setLoading(true);
      const uploadToastId = toast.info("Starting upload...", {
        autoClose: false,
      });
      try {
        const res = await axiosInstance.post(
          "/users/update/personalinfo",
          formDataToSend,
          {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (progressEvent) => {
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total
              );
              if (progress === 100) {
                toast.update(uploadToastId, {
                  render: `Processing...`,
                  type: "info",
                  autoClose: false,
                });
              } else {
                toast.update(uploadToastId, {
                  render: `Upload progress: ${progress}%`,
                  type: "info",
                  autoClose: false,
                });
              }
            },
          }
        );
        if (res.data.success) {
          modelToggle("JobStatus");
          updateUser({ ...formData, personalInfoSubmitted: true });
          toast.update(uploadToastId, {
            render: "Section Completed.",
            type: "success",
            autoClose: 3000,
          });
        } else {
          toast.update(uploadToastId, {
            render: res.data.message,
            type: "error",
            autoClose: 3000,
          });
        }
      } catch (err) {
        console.error(err);
        toast.update(uploadToastId, {
          render:
            err.response?.data.message || "Something Broken..! Try again later",
          type: "error",
          autoClose: 3000,
        });
      } finally {
        setLoading(false);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[45] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm px-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-h-full max-w-md overflow-y-auto hide-scrollbar">
        <h2 className="text-2xl font-bold text-center mb-4">
          Personal Details
        </h2>
        <form className="space-y-4" noValidate onSubmit={handleFormSubmit}>
          <div>
            <input
              type="number"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className={`w-full p-2 border text-gray-500 ${errors.age
                ? "border-red-600 focus:ring-red-700"
                : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
            />
            {errors.age && (
              <span className="text-red-600 text-xs">{errors.age}</span>
            )}
          </div>
          <div>
            <input
              type="date"
              name="dateOfBirth"
              max="2004-12-30"
              placeholder="DOB"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className={`w-full p-2 border text-gray-500 ${errors.dateOfBirth
                ? "border-red-600 focus:ring-red-700"
                : "border-gray-300 focus:ring-gray-400"
                }  rounded-lg focus:outline-none focus:ring-2`}
            />
            {errors.dateOfBirth && (
              <span className="text-red-600 text-xs">{errors.dateOfBirth}</span>
            )}
          </div>

          <div>
            <SingleSelect
              name="gender"
              OnChange={handleInputChange}
              Options={gender}
              Placeholder="Gender"
              AllowNew={false}
              ClassName={`w-full border text-gray-500 ${errors.gender
                ? "border-red-600 hover:ring-red-700"
                : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
            {errors.gender && (
              <span className="text-red-600 text-xs">{errors.gender}</span>
            )}
          </div>
          <div>
            <MultiSelect
              name="hobbies"
              OnChange={handleInputChange}
              Options={hobbies}
              Placeholder="Hobbies"
              ClassName={`w-full border text-gray-500 ${errors.hobbies
                ? "border-red-600 hover:ring-red-700"
                : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
            {errors.hobbies && (
              <span className="text-red-600 text-xs">{errors.hobbies}</span>
            )}
          </div>
          <div>
            <MultiSelect
              name="interests"
              OnChange={handleInputChange}
              Options={interests}
              Placeholder="Interests"
              ClassName={`w-full border text-gray-500 ${errors.interests
                ? "border-red-600 hover:ring-red-700"
                : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
            {errors.interests && (
              <span className="text-red-600 text-xs">{errors.interests}</span>
            )}
          </div>
          <div>
            {(errors.location && locationClicked) ? (
              <>
                {/* Fallback to the standard select menu if geolocation fails or accuracy is too low */}
                <SingleSelect
                  name="location"
                  OnChange={handleInputChange}
                  Options={locations}
                  Placeholder="Select your location"
                  AllowNew={false}
                  ClassName={`w-full border text-gray-500 ${errors.location
                    ? "border-red-600 hover:ring-red-700"
                    : "border-gray-300 hover:ring-gray-400"
                    }  rounded-lg hover:ring-2`}
                />
                <span className="text-red-600 text-xs">{errors.location}</span>
              </>
            ) : (
              <input
                type="text"
                placeholder="Location"
                value={formData.location.shortName}
                onClick={getLocation}
                className={`w-full p-2 border text-gray-500 ${errors.location
                  ? "border-red-600 hover:ring-red-700"
                  : "border-gray-300 hover:ring-gray-400"
                  }  rounded-lg focus:outline-none focus:ring-2 hover:ring-2 `}
                readOnly
              />
            )}
          </div>

          <div>
            <SingleSelect
              name="smokingHabits"
              OnChange={handleInputChange}
              Options={smokingHabits}
              Placeholder="Smoking Habits"
              AllowNew={false}
              ClassName={`w-full border text-gray-500 ${errors.smokingHabits
                ? "border-red-600 hover:ring-red-700"
                : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
            {errors.smokingHabits && (
              <span className="text-red-600 text-xs">
                {errors.smokingHabits}
              </span>
            )}
          </div>
          <div>
            <SingleSelect
              name="drinkingHabits"
              OnChange={handleInputChange}
              Options={drinkingHabits}
              Placeholder="Drinking Habits"
              AllowNew={false}
              ClassName={`w-full border text-gray-500 ${errors.drinkingHabits
                ? "border-red-600 hover:ring-red-700"
                : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
            {errors.drinkingHabits && (
              <span className="text-red-600 text-xs">
                {errors.drinkingHabits}
              </span>
            )}
          </div>
          <div>
            <MultiSelect
              name="qualification"
              OnChange={handleInputChange}
              Options={qualifications}
              Placeholder="Qualifictions"
              ClassName={`w-full border text-gray-500 ${errors.qualification
                ? "border-red-600 hover:ring-red-700"
                : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
            {errors.qualification && (
              <span className="text-red-600 text-xs">
                {errors.qualification}
              </span>
            )}
          </div>
          <div>
            <ProfilePicUpload
              setUpload={handleProfilePicSubmit}
              Placeholder="Profile Pic"
              Error={errors}
              setFileSelected={setProfilePicSelected}
              ClassName={`w-full block text-gray-500 p-2 border ${errors.profilePic
                ? "border-red-600 hover:ring-red-700"
                : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
          </div>
          <div>
            <ImageUpload
              setUpload={handleImagesSubmit}
              Placeholder="Add More Images"
              Error={errors}
              setFileSelected={setImagesSelected}
              ClassName={`w-full block text-gray-500 p-2 border ${errors.images
                ? "border-red-600 hover:ring-red-700"
                : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
          </div>
          <div>
            <ReelUpload
              setUpload={handleShortReelSubmit}
              Placeholder="Short Reel"
              Error={errors}
              setFileSelected={setShortReelSelected}
              ClassName={`w-full block text-gray-500 p-2 border ${errors.shortReel
                ? "border-red-600 hover:ring-red-700"
                : "border-gray-300 hover:ring-gray-400"
                }  rounded-lg hover:ring-2`}
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-black text-white rounded-lg font-medium"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetails;
