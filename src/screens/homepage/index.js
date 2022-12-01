import React from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const HomePage = () => {
  const [products, setProducts] = React.useState([
    {
      productName: 'Zara Luxury',
      price: '1500',
    },
    {
      productName: 'Zara Hurrion',
      price: '2300',
    },
  ]);

  console.log({ products });
  return (
    <div>
      <Navbar />
      <CssBaseline />
      <Container fixed sx={{ marginTop: '20px' }}>
        {products.length > 0 &&
          products.map((item) => {
            return (
              <>
                <Card />
              </>
            );
           
          })}
      </Container>
    </div>
  );
};

export default HomePage;
