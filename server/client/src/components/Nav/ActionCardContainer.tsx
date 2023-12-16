import React, {memo} from 'react';
import { Grid} from '@mui/material';
import ActionCard from './ActionCard';

export const ACTION_CARD = {
    FPS: 1, 
    FORMAT: 2,
    RESOLUTION: 3, 
	COMPRESS: 4
}

const ActionCardContainer = ({OnGridItemClicked}) => {
    return (
        <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',maxWidth: '900px', margin: '0 auto' }}>
          
			<ActionCard 
				strTitle="Compress"
				strContent="Reduce the video file sizes while maintaining quality."
				onClick={OnGridItemClicked(ACTION_CARD.COMPRESS)}
			></ActionCard>

			<ActionCard 
				role="gridcell"
				strTitle="Format"
				strContent="Reencode video files by modifying the file format."
				onClick={OnGridItemClicked(ACTION_CARD.FORMAT)}
			></ActionCard>

			<ActionCard 
				role="gridcell"
				strTitle="Resolution"
				strContent="Reencode the video files to desired resolutions."
				onClick={OnGridItemClicked(ACTION_CARD.RESOLUTION)}
			></ActionCard>
			
			<ActionCard 
				role="gridcell"
				strTitle="FPS"
				strContent="Reencode video files by adjusting the FPS value."
				onClick={OnGridItemClicked(ACTION_CARD.FPS)}
			></ActionCard>
        </Grid>
    );
}

export default memo(ActionCardContainer);