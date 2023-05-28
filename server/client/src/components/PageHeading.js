import React from 'react';
import { Typography, Box } from '@mui/material';

const PageHeading = ({heading, description}) => {
  return (
    <Box marginBottom={5}>
      <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
        {heading}
      </Typography>
      <Typography variant="body1" component="p">
        {description}
      </Typography>
    </Box>
  );
};

export default PageHeading;
