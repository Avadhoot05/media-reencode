import React, {memo} from 'react';
import { Typography, Box } from '@mui/material';

interface Props {
  heading: string, 
  description: string
}

const PageHeading = (props : Props) => {

  console.log("header rendering");

  const {heading, description} = props;

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

export default memo(PageHeading);
