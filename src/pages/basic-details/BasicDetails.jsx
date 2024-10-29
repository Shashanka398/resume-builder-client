import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const BasicDetails = () => {
    const [basicDetails, setBasicDetails] = useState({
        name: '',
        email: '',
        linkedIn: '',
        phoneNumber: '',
        personalLink: '',
    });

    const handleChange = (event) => {
        setBasicDetails({
            ...basicDetails,
            [event.target.name]: event.target.value,
        });
    };

    const formOnSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
        console.log(basicDetails); // Log the basic details
    };

    return (
        <div className='basic-details'>
            <form onSubmit={formOnSubmit}>
                <TextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />
                <TextField
                    name="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />
                <TextField
                    name="linkedIn"
                    label="LinkedIn"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />
                <TextField
                    name="phoneNumber"
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />
                <TextField
                    name="personalLink"
                    label="Personal Link"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default BasicDetails;
