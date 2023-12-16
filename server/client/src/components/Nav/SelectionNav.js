import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ACTION_CARD } from './ActionCardContainer';

import ActionCardContainer from './ActionCardContainer';


function SelectionNav() {
	const navigate = useNavigate();

	const OnGridItemClicked = useCallback(function(uGridType) {
		return function() {
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
		}
	},[]);

    return (
		<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
		
		<Typography data-testid="app-heading" variant="h2" component="h1" gutterBottom fontWeight={600}>
        	Convert<span style={{color: '#666666'}}>Zilla</span>
      	</Typography>
      	<ActionCardContainer OnGridItemClicked={OnGridItemClicked}></ActionCardContainer>
        
      </div>
    );
}

export default SelectionNav;