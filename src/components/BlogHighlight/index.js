import React from 'react'

import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

const BlogHighlight = ({ image, title, date, body }) => {



    return(
        <Card 
            sx={{ 
                maxWidth: 350, display: "flex", flexDirection: "column",
                justifyContent: "space-between"
            }}>
            <CardMedia
                component="img"
                height="250"
                image={image}
                alt="card image"
            />
            <CardContent>
                <h2>{title}</h2>
                <p>{date}</p>
                <p>{body}</p>
                
            </CardContent>
            <CardActions>
                <Button>Read more...</Button>
            </CardActions>

        </Card>
    );

}

export default BlogHighlight;