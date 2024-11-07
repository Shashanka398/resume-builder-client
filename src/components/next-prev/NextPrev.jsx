import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { pages } from '../../utils/pages';
import { useSelector,useDispatch } from "react-redux";
const NextPrev = ({ submitForm }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPageIndex = pages.indexOf(location.pathname);

  const handlePrevious = () => {
    if (currentPageIndex > 0) {
      navigate(pages[currentPageIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentPageIndex < pages.length - 1) {
      navigate(pages[currentPageIndex + 1]);
    } else {
      submitForm();
      navigate('/templates-page')
    }
  };

  return (
    <div className='main'>
      <Button 
        variant="contained" 
        onClick={handlePrevious} 
        disabled={currentPageIndex === 0}
      >
        Previous
      </Button>
      <Button 
        variant="contained" 
        onClick={handleNext}
      >
        {currentPageIndex === pages.length - 1 ? 'Submit' : 'Next'}
      </Button>
    </div>
  );
};

export default NextPrev;
