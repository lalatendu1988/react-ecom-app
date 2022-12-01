import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './index.css';

export default function MultiActionAreaCard(props) {
  const { item } = props;
  console.log('f');
  return (
    <Card sx={{ maxWidth: 300, minHeight: 300 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image='https://media.vogue.in/wp-content/uploads/2020/01/zara.jpg'
          alt='green iguana'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {item.productName}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            MRP ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
