import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
		
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',maxWidth: '900px', margin: '0 auto' }}>
          
			<ActionCard 
				strTitle="Compress"
				strContent="Reduce the video file sizes while maintaining quality, with adjustable compression strength."
				onClick={OnGridItemClicked(ACTION_CARD.COMPRESS)}
			></ActionCard>

			<ActionCard 
				strTitle="Format"
				strContent="Reencode video files by modifying the file format. It efficiently converts videos to different formats, "
				onClick={OnGridItemClicked(ACTION_CARD.FORMAT)}
			></ActionCard>

			<ActionCard 
				strTitle="Resolution"
				strContent="Reencode the video files to desired resolutions, enhancing visual quality for an enhanced viewing experience."
				onClick={OnGridItemClicked(ACTION_CARD.RESOLUTION)}
			></ActionCard>
			
			<ActionCard 
				strTitle="FPS"
				strContent="Reencode video files by adjusting the Frames Per Second (FPS) value. It optimizes videos with the desired FPS setting, enhancing playback smoothness and ensuring compatibility with different devices and platforms."
				onClick={OnGridItemClicked(ACTION_CARD.FPS)}
			></ActionCard>
        </Grid>
      </div>
    );
}

export default SelectionNav