import TextField from "@mui/material/TextField";
import { Autocomplete } from "@mui/material";
const style={
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
      },
      "& input": {
        color: "white", // Set input text color
      },
    },
    "& .MuiInputLabel-root": {
      color: "white",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    "& .MuiSvgIcon-root":{
        color:"white"
    },
    "& .MuiChip-label":{
        color:"white"
    }
  }
export const TextInput = ({ name, label, type = "string", handleChange,value }) => {
  return (
    <TextField
      name={name}
      label={label}
      sx={style}
      margin="normal"
      onChange={handleChange}
      variant="outlined"
      type={type}
      value={value}
    />
  );
};

export const AutoComplete = ({name, label, type = "string", list,setList,data,options,index,isMultiple=false}) => {
  return (
    <Autocomplete
      options={options}
      value={data.label || "" }
      multiple={isMultiple}
    sx={{...style,"margin-top": '16px',}}
      onChange={(event, newValue) => {
        const newDetails = [...list];
        newDetails[index].label = newValue;
        setList(newDetails);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          name={name}
          sx={style}
          variant="outlined"
        />
      )}
    />
  );
};
