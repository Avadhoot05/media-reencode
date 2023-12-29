import React from 'react';
import { ACTION } from '../constants';
import { LinearProgress, Typography, Button, Box } from '@mui/material';
import { saveAs } from 'file-saver';
import { MdOutlineFileDownload } from "react-icons/md";
import { baseUrl } from 'src/utils';

interface Props {
    percent: number, 
    strVideoPath: string, 
    action: number
}

function Result(props : Props) 
{
    let {percent, strVideoPath, action} = props;
    const HandleDownload = ( e: any ) : void => {
	    saveAs(`${baseUrl}/${strVideoPath}`, "video");
    }

    percent = isNaN(percent) ? 0 : percent;

    let message : string = "";
    if(action === ACTION.FPS)
        message =  "The video's FPS has been updated.";
    else if(action === ACTION.COMPRESS)
        message =  "The video has been compressed.";
    else if(action === ACTION.RESOLUTION)
        message =  "The video's resolution has been updated.";
    else if(action === ACTION.FORMAT)
        message =  "The video's format has been updated.";


    return (  
    <>
        {
            strVideoPath.length > 0 ? (
                
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    height="100vh"
                >
                    <Typography variant="body1" component="p" fontSize={18} marginBottom={3}>
                        {message}
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<MdOutlineFileDownload />}
                        onClick={HandleDownload}
                    >
                        Download
                    </Button>
                </Box>
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