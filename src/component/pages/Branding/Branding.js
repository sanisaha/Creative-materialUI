import { Box, Button, Stack, styled, Typography } from '@mui/material';
import React from 'react';

const BrandingWrapper = styled(Box)(({theme}) =>({
    height: '70vh',
    backgroundColor: 'rgba(122, 178, 89, 0.15)',
    padding: theme.spacing(4),
    margin: '4rem 0',
    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:'center'
}))

const Branding = () => {
    return (
       <BrandingWrapper>
        <Stack spacing={5}>
            <Typography sx={{fontSize:'2.5rem',
        fontWeight:'bold', lineHeight: '1.2'}}>
                Lets's Grow Your Brand <br/> To The Next Level
            </Typography>
            <Typography>
                our customer care is our main focus.<br/> We are always dedicated to our customer.
            </Typography>
            <Button sx={{width:'50%'}}>Hire Us</Button>
        </Stack>
        <Box sx={{width:'50%',
    // display:['none', 'none', 'block']
    display: {
        xs: 'none',
        sm: 'none',
        md: 'block'
    }
    }}>
            <img src='https://www.seekpng.com/png/detail/765-7656728_consultative-support-customer-care-logo-png.png' alt='branding'
            style={{width:'100%'}}
            />
        </Box>
       </BrandingWrapper>
    );
};

export default Branding;