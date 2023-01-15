import { Box, styled } from '@mui/material';
import React from 'react';
const brands = [
    'https://www.carelink24.org/wp-content/uploads/2017/08/17th-August-2017.jpg',
    'https://mobiili.fi/wp-content/uploads/2012/11/google_logo.jpg',
    'https://data.planeo.cz/planeo/brands/apple_obr.jpg',
    'https://m.media-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png',
    'https://i.pinimg.com/originals/d4/21/7f/d4217f94e671a5ae4bda65d62ee97106.png'
]
const BranchWrapper = styled(Box)(({theme}) => ({
    marginBottom: '4rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& > img': {
        height: '60px'
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        '& > img' : {
            marginBottom: '1rem'
        }
    }
}))
const Branch = () => {
    return (
        <BranchWrapper>
        {brands.map((brand, i) => (
            <img key={i} src={brand} alt='brands'/>
        ))}
        </BranchWrapper>
    );
};

export default Branch;