import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { AutoComplete, TextInput } from "../../components/input-components/InputComponent";
import { techStackList } from "../../utils/pages";

const ExperienceDetails = () => {
    const [experienceDetailsList, setExperienceDetailsList] = useState([{
        companyName: '',
        from: '',
        to: '',
        description: '',
        techStack: []
    }]);

    const handleChange = (index, event) => {
        const newExperienceList = [...experienceDetailsList];
        newExperienceList[index][event.target.name] = event.target.value;
        setExperienceDetailsList(newExperienceList);
    };

    const handleAdd = () => {
        setExperienceDetailsList([{
            companyName: '',
            from: '',
            to: '',
            description: '',
            techStack: []
        }, ...experienceDetailsList]);
    };

    const handleRemove = (index) => {
        const newExperienceList = experienceDetailsList.filter((_, i) => i !== index);
        setExperienceDetailsList(newExperienceList);
    };

    return (
        <Box sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
                Experience Details
            </Typography>
            {experienceDetailsList.map((data, index) => (
                <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid #ccc', borderRadius: '4px' }}>
                    <div className='flex flex-row'>
                    <div>
                    <TextInput
                        name="companyName"
                        label="Company Name"
                        handleChange={(e) => handleChange(index, e)}
                        value={data.companyName}
                    />
                    <TextInput
                        name="from"
                        label="From"
                        handleChange={(e) => handleChange(index, e)}
                        value={data.from}
                    />
                    <TextInput
                        name="to"
                        label="To"
                        handleChange={(e) => handleChange(index, e)}
                        value={data.to}
                    />

                    </div>
                  
                    <TextInput className="w-100"
                        name="description"
                        label="Description"
                        handleChange={(e) => handleChange(index, e)}
                        value={data.description}
                        type="text"
                    />
                    <AutoComplete
                        name="techStack"
                        label="Tech Stack"
                        list={experienceDetailsList}
                        setList={setExperienceDetailsList}
                        data={data}
                        options={techStackList.map((tech, index) => ({ label: tech, key: `${tech}-${index}` }))}
                        isMultiple={true}
                        index={index}
                    />
                        
                    </div>
                   
                    <Button variant="outlined" color="error" onClick={() => handleRemove(index)}>
                        Remove
                    </Button>
                </Box>
            ))}
            <Button variant="contained" onClick={handleAdd}>
                Add Experience
            </Button>
        </Box>
    );
};

export default ExperienceDetails;
