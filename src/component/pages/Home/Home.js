import { Box, styled } from '@mui/material';
import React from 'react';
import Branch from '../Branch/Branch';
import Branding from '../Branding/Branding';
import Service from '../Services/Service';


const Home = () => {
    return (
        <div>
            <Branding></Branding>
            <Branch></Branch>
            <Service></Service>
        </div>
    );
};

export default Home;