import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {AccessTime} from '@mui/icons-material';
import Rating from '@mui/material/Rating';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants:[
                {
                    props: {
                        variant: "body2",
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3",
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ],
        },
    },
});

function TourCard({tour}) {
  return (
    <Grid item xs={3}>
        <ThemeProvider theme={theme} >    
        <Paper elevation={3} >
            <img src={tour.image} 
            alt={tour.name}
            className="img"
            />
            <Box paddingX={3}>
                <Typography component="h2" variant="subtitle1">
                {tour.name}
                </Typography>
                <Box
                    sx={{
                    display: "flex",
                    alignItems:"center"
                    }}
                >
                    <AccessTime sx={{width: 12.5}} />
                    <Typography variant="body2" component="p" marginLeft={0.5} >
                        {tour.duration}
                    </Typography>
                </Box>
                <Box
                    sx={{
                    display: "flex",
                    alignItems:"center"
                    }}
                    marginTop={3}
                >
                <Rating name="read-only" value={tour.rating} precision={0.5} size="small" />
                <Typography variant="body2" component="p" marginLeft={0.5}>
                    {tour.rating}
                </Typography>
                <Typography variant="body3" component="p" marginLeft={0.5}>
                    ({tour.numberOfReviews}Reviews)
                </Typography>
                </Box> 
                <Box>
                <Typography variant="body2" component="p" marginLeft={0.5}>
                    From ${tour.price}
                </Typography>
                </Box>
            </Box>             
        </Paper>
        </ThemeProvider>
    </Grid> 
    
  )
}

export default TourCard