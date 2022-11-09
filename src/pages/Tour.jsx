import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import CustomizedAccordion from '../components/CustomizedAccordion';
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from '../components/BasicModal';
import StaticDatePickerDemo from '../components/DatePicker';

function Tour() {
  return (
    <Container sx={{width: 900}}>
        <Typography marginTop={3} variant="h3" component="h1">
            Explore the World in Vegas
        </Typography>
        <Box marginTop={3} sx={{dispaly: "flex"}}>  
            <ImageCollage />  
        </Box>
        <Box>
          <Typography variant='h6' component="h4" marginTop={3}>
              About this Ticket
          </Typography>
          <Typography variant='paragraph' component="p" marginTop={3}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perspiciatis hic, repellendus, fugiat itaque aut ea qui optio repudiandae, quos aspernatur? Repellendus temporibus dolorum doloremque praesentium placeat facilis dicta a nulla reiciendis quod, corporis, eius in modi hic quia maxime!
          </Typography>
        </Box>
        <Box paddingBottom={5}>
          <Typography variant='h6' component="h4" marginTop={3}>
             Frequently Asked Questions
          </Typography>
          <CustomizedAccordion />

         
        </Box>
        <Box paddingBottom={5}>
        <BottomNavigation >
          <BasicModal />
        </BottomNavigation>
        
        </Box>
    </Container>
  )
}

export default Tour