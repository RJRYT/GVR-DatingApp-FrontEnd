const inputFields = [
    { type: "text", placeholder: "age", name: "age" },
    { type: "text", placeholder: "DOB", name: "dob" },
    { type: "text", placeholder: "Hobbies", name: "hobbies" },
    { type: "text", placeholder: "Interests", name: "interests" },
    { type: "text", placeholder: "Smoking habits", name: "smokingHabits" },
    { type: "text", placeholder: "Drinking habits", name: "drinkingHabits" },
    { type: "text", placeholder: "Qualification", name: "qualification" },
    {
      type: "file",
      placeholder: "Profile Pic",
      name: "profilePic",
      icon: "image",
    },
    {
      type: "file",
      placeholder: "Add more image",
      name: "additionalImage",
      icon: "image",
    },
    {
      type: "file",
      placeholder: "Short reel",
      name: "shortReel",
      icon: "videoIcon",
    },
    { type: "text", placeholder: "Job status", name: "jobStatus" },
  ];
  
  const formList = [
    {
      type: "text",
      placeHolder: "Company name",
      name: "company-name",
    },
    {
      type: "text",
      placeHolder: "Designation",
      name: "designation",
    },
    {
      type: "text",
      placeHolder: "Location",
      name: "location",
    },
  ];
  
  const companyForm = [
    {
      type: "text",
      placeHolder: "Job title",
      name: "job-title",
    },
  
    {
      type: "text",
      placeHolder: "Expertise level",
      name: "exp-level",
    },
    {
      type: "text",
      placeHolder: "Interested in",
      name: "intrs-in",
    },
  ];
  
  const checkBoxes = [
    {
      type: "checkbox",
      placeHolder: "Dating",
      name: "dating",
    },
  
    {
      type: "checkbox",
      placeHolder: "Matrimony",
      name: "matrimony",
    },
    {
      type: "checkbox",
      placeHolder: "Job portal",
      name: "job-portal",
    },
    {
      type: "checkbox",
      placeHolder: "E-commerce",
      name: "e-commerce",
    },
    {
      type: "checkbox",
      placeHolder: "Study abroad",
      name: "study abroad",
    },
  ];
  
  export { inputFields, formList, companyForm, checkBoxes };