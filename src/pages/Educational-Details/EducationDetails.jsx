import React, { useState } from "react";
import {AutoComplete,TextInput} from "../../components/input-components/InputComponent"
import Button from "@mui/material/Button";
import { years } from "../../utils/pages";
import DeleteIcon from '@mui/icons-material/Delete';
import "./EducationDetails.css"

const EducationDetails = () => {
  const [educationDetails, setEducationDetails] = useState([
    { degree: "", collageName: "", passout: "", grade: "", place: "" },
  ]);

  const yearList = years(1900, new Date().getFullYear());

  const handleChange = (index, event) => {
    const newEducationDetails = [...educationDetails];
    if(event.target.name==='grade'){
        if(event.target.value ===''|| (event.target.value>=0 && event.target.value<=100)){
            newEducationDetails[index][event.target.name] = event.target.value ;
        }else{
            newEducationDetails[index][event.target.name]=100
        }
        
    }else{
        newEducationDetails[index][event.target.name] = event.target.value;
    }
   
    setEducationDetails(newEducationDetails);
  };

  const handleAdd = () => {
    setEducationDetails([
      ...educationDetails,
      { degree: "", collageName: "", passout: "", grade: "", place: "" },
    ]);
  };

  const handleRemove = (index) => {
    const newEducationDetails = educationDetails.filter((_, i) => i !== index);
    setEducationDetails(newEducationDetails);
  };


  return (
    <div>
      <h2>Education Details</h2>
      {educationDetails.map((data, index) => (
        <div key={index} className="container">
          <TextInput label="Degree" name="degree" handleChange={(event) => handleChange(index, event)} value={data.degree} />
          <TextInput label="College/University Name" name="collageName" handleChange={(event) => handleChange(index, event)} value={data.collageName} />
          <TextInput label="Grade" name="grade" type="number" handleChange={(event) => handleChange(index, event)}  value={data.grade}/>
          <AutoComplete options={yearList} name="Passout"  index={index} data={data} label="passout" list={educationDetails} setList={setEducationDetails} />
          <TextInput label="Place" name="place" type="number" handleChange={(event) => handleChange(index, event)}  value={data.place}/>
            <div className="delete">
            <DeleteIcon
            variant="outlined"
            color="error"
            onClick={() => handleRemove(index)}
            style={{ marginLeft: "10px" }}
          />
            </div>
        
        </div>
      ))}
      <Button variant="contained" onClick={handleAdd}>
        Add Education
      </Button>
    </div>
  );
};



export default EducationDetails;
