import React, { useState } from "react";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { years } from "../../utils/pages";
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
          <TextField
            label="Degree"
            name="degree"
            value={data.degree}
            onChange={(event) => handleChange(index, event)}
            variant="outlined"
            style={{ marginLeft: "10px" }}
          />
          <TextField
            label="College/University Name"
            name="collageName"
            value={data.collageName}
            onChange={(event) => handleChange(index, event)}
            variant="outlined"
            style={{ marginLeft: "10px" }}
          />
          <Autocomplete
            disablePortal
            options={yearList}
            value={data.passout}
            style={{ marginLeft: "10px" }}
         
            onChange={(event, newValue) => {
              const newEducationDetails = [...educationDetails];
              newEducationDetails[index].passout = newValue;
              setEducationDetails(newEducationDetails);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Passout"
                name="passout"
                variant="outlined"
              />
            )}
          />
          <TextField
            label="Grade"
            name="grade"
               type="number"
            value={data.grade}
            onChange={(event) => handleChange(index, event)}
            variant="outlined"
            style={{ marginLeft: "10px" }}
          />
          <TextField
            label="Place"
            name="place"
            value={data.place}
            onChange={(event) => handleChange(index, event)}
            variant="outlined"
            style={{ marginLeft: "10px" }}
          />
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleRemove(index)}
            style={{ marginLeft: "10px" }}
          >
            Remove
          </Button>
        </div>
      ))}
      <Button variant="contained" onClick={handleAdd}>
        Add Education
      </Button>
    </div>
  );
};

export default EducationDetails;
