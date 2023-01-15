import { Typography } from '@mui/material';
import React from 'react';

const SectionTitle = ({title, colored}) => {
    return (
        <div>
            <Typography 
            sx={{
                fontSize: '34px',
                fontWeight: '600',
                textAlign: 'center'
            }}
            >
            {title}{ }
            {colored && <span style={{color: '#0000ff'}}>{colored} </span>}
            </Typography>
        </div>
    );
};

export default SectionTitle;