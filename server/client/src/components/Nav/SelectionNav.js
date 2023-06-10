import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import ActionCard from './ActionCard';

export const ACTION_CARD = {
    FPS: 1, 
    FORMAT: 2,
    RESOLUTION: 3, 
	COMPRESS: 4
}

function SelectionNav() {
	const navigate = useNavigate();

	const OnGridItemClicked = uGridType => {
		return () => {
			switch(uGridType)
			{
				case ACTION_CARD.FPS:
					console.log("FPS clicked");
					navigate("/fps");
					break;
				case ACTION_CARD.FORMAT:
					console.log("format clicked");
					navigate("/format");
					break;				
				case ACTION_CARD.RESOLUTION:
					console.log("resolution clicked");
					navigate("/resolution");
					break;
				case ACTION_CARD.COMPRESS:
					console.log("compress clicked");
					navigate("/compress");
					break;
				default:
					navigate('/');
			}
		};
	}	


    return (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
		
		<Typography variant="h2" component="h1" gutterBottom fontWeight={600}>
        	Convert<span style={{color: '#666666'}}>Zilla</span>
      	</Typography>
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',maxWidth: '900px', margin: '0 auto' }}>
          
			<ActionCard 
				strTitle="Compress"
				strContent="Reduce the video file sizes while maintaining quality."
				onClick={OnGridItemClicked(ACTION_CARD.COMPRESS)}
			></ActionCard>

			<ActionCard 
				strTitle="Format"
				strContent="Reencode video files by modifying the file format."
				onClick={OnGridItemClicked(ACTION_CARD.FORMAT)}
			></ActionCard>

			<ActionCard 
				strTitle="Resolution"
				strContent="Reencode the video files to desired resolutions."
				onClick={OnGridItemClicked(ACTION_CARD.RESOLUTION)}
			></ActionCard>
			
			<ActionCard 
				strTitle="FPS"
				strContent="Reencode video files by adjusting the FPS value."
				onClick={OnGridItemClicked(ACTION_CARD.FPS)}
			></ActionCard>
        </Grid>
      </div>
    );
}

export default SelectionNav