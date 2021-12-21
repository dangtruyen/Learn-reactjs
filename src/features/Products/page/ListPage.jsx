import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

ListPage.propTypes = {};

const useStyles = makeStyles({
  root: {},

  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
});

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();
  useEffect(() => {
    (async () => {
      try {
        const { data } = await productApi.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log('failed to fetch product list:', error);
      }
      setLoading(false);
    })();
  }, []);
  return (
    <Box>
      <Container>
        <Grid>
          <Grid container spacing={1}>
            <Grid className={classes.left} item>
              <Paper elevation={0}>left column</Paper>
            </Grid>
            <Grid className={classes.right} item>
              <Paper elevation={0}>
                {loading ? (
                  <ProductSkeletonList />
                ) : (
                  <ProductList data={productList}></ProductList>
                )}
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
