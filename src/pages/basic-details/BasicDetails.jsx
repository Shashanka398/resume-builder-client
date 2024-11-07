import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from '../../redux/slices/basicDetials.slice'; 
import { TextInput } from "../../components/input-components/InputComponent";

const BasicDetails = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.basicDetails.basicDetails);
  const [basicDetails, setBasicDetails] = useState({
    name: "",
    email: "",
    linkedIn: "",
    phoneNumber: "",
    personalLink: "",
  });

  useEffect(() => {
    if (userDetails) {
      setBasicDetails(userDetails); 
    }
  }, [userDetails]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBasicDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = () => {
    dispatch(setUserDetails(basicDetails)); 
  };

  return (
    <div className="basic-details">
      <form className="form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <TextInput handleChange={handleChange} name="name" label="Name" value={basicDetails.name} />
        <TextInput handleChange={handleChange} name="email" label="Email" value={basicDetails.email} />
        <TextInput handleChange={handleChange} name="linkedIn" label="LinkedIn" value={basicDetails.linkedIn} />
        <TextInput handleChange={handleChange} name="phoneNumber" label="Phone Number" type="number" value={basicDetails.phoneNumber} />
        <TextInput handleChange={handleChange} name="personalLink" label="Personal Link" value={basicDetails.personalLink} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default BasicDetails;
