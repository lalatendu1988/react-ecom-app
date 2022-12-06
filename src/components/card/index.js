import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './index.css';

export default function MultiActionAreaCard(props) {
  const { item } = props;

  return (
    <Card
      variant='outlined'
      sx={{
        width: '19rem',
        minHeight: 300,
        marginRight: '20px',
        marginBottom: '20px',
      }}
    >
      <CardActionArea>
        <CardMedia
          component='img'
          height='200'
          image={item.image}
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='subtitle1' component='div'>
            {item.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            MRP ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained'>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
