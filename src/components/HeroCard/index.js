import React from 'react'

import { useTheme } from '@mui/material';

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';



const HeroCard = ({image, title, body}) => {

    const theme = useTheme();

    return(
        <Card sx={{ maxWidth: 250, backgroundColor: theme.palette.secondary.main }}> 
            <CardMedia
                component="img"
                image={image}
                alt="card image"
                height="200"
            />
            <CardContent sx={{  }}>
                <h2 style={{color: "white"}}>{title}</h2>
                <p style={{color: "white"}}>{body}</p>
            </CardContent>
        </Card>
    );
};

export default HeroCard;
