import React, { useState } from "react";
import "./BasicDetails.css"
import {TextInput} from "../../components/input-components/InputComponent"


const BasicDetails = () => {
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    linkedIn: "",
    phoneNumber: "",
    personalLink: "",
  });

  const handleChange = (event) => {
    setBasicDetails({
      ...basicDetails,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="basic-details">
      <form className="form">
        <TextInput handleChange={handleChange} name="name" label="Name"/>
        <TextInput  handleChange={handleChange} name="email" label="Email"/>
        <TextInput  handleChange={handleChange} name="linkedIn" label="LinkedIn"/>
        <TextInput  handleChange={handleChange} name="phoneNumber" label="Phone Number" type="number"/>
        <TextInput handleChange={handleChange} name="personalLink"      label="Personal Link"/>
      </form>
    </div>
  );
};

  
export default BasicDetails;
