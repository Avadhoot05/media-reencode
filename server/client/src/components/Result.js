import React from 'react';
import { BACKEND_URI } from '../constants';
import { LinearProgress, Typography } from '@mui/material';

function Result({percent, strVideoPath}) {

    return (  
    <>
    {
        strVideoPath.length > 0 ? (
            <video
                preload="auto"
                width="320"
                height="240"
                controls
                >
                <source src={`${BACKEND_URI}${strVideoPath}`} />
                ;Your browser does not support the video tag.
            </video>
        ) : (
     
            <div style={{ display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <LinearProgress
                    variant="determinate"
                    value={percent}
                    style={{width:'100%', height: '20px', maxWidth: '400px' }}
                />
                <Typography
                    variant="body2"
                    color="textSecondary"
                >
                    {`Processing ${Math.ceil(percent)}%`}
                </Typography>
                <Typography
                    variant="body2"
                    style={{color: "#000000", marginTop: "20px"}}

                >
                    <span style={{color: "#ff0000"}}>IMPORTANT:</span> Avoid page refresh while processing. Refreshing will necessitate video reupload.
                </Typography>
            </div>
        )
    }
    </>
  )
}

export default Result;