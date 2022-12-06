import React, { useEffect } from 'react';
import Navbar from '../../components/navbar';
import Card from '../../components/card';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ProductListing } from '../../services/productList.helper';

const HomePage = () => {
  const [products, setProducts] = React.useState([]);

  useEffect(() => {
    ProductListing().then((res) => setProducts(res));
  }, []);

  return (
    <div style={{ backgroundColor: '#e4e5e5' }}>
      <Navbar />
      <CssBaseline />
      <Container fixed sx={{ marginTop: '20px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 3,
            bgcolor: '#e4e5e5',
            justifyContent: 'flex-start',
            borderRadius: 1,
            flexWrap: 'wrap',
          }}
        >
          {products.length > 0 &&
            products.map((item, key) => <Card item={item} key={key} />)}
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
