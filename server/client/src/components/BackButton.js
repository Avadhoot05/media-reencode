import React from 'react';
import { IconButton, Tooltip  } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

    return (
        <Tooltip title="Go Back">
            <IconButton edge="start" color="inherit" aria-label="back" onClick={handleGoBack}>
                back
            </IconButton>
        </Tooltip>
  );
};

export default BackButton;
