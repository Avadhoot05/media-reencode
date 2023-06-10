import React from 'react'
import { Grid, Card, CardActionArea, CardContent, Typography,Tooltip  } from '@mui/material';


function ActionCard({strTitle, strContent, onClick}) {

  return (
    <>
			<Tooltip title={strContent} arrow>
        <Grid item xs={8} sm={3}>
            <Card onClick={onClick}>
			          <CardActionArea>
                    <CardContent>
                        <Typography variant="h5" marginBottom={1} fontWeight={600}>{strTitle}</Typography>
                        <Typography variant="body1" sx={{ 
                            fontSize: '12px', overflow: 'hidden', 
                            textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>{strContent}</Typography>
                    </CardContent>
			    </CardActionArea>
            </Card>
        </Grid>
      </Tooltip>
    </>
  )
}

export default ActionCard;