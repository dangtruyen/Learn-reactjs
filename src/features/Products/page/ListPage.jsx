import { Box, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import ProductSort from '../components/ProductSort';
import ProductFilter from '../components/ProductFilter';

ListPage.propTypes = {};

const useStyles = makeStyles({
  root: {},

  left: {
    width: '250px',
  },
  right: {
    flex: '1 1 0',
  },
  pagination: {
    display: 'flex',
    flexFlow: 'row nowarp',
    justifyContent: 'center',

    marginTop: '20px',
    paddingBottom: '10px',
  },
});

function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });

  const [filters, setFilter] = useState({
    _page: 1,
    _limit: 9,
    _sort: 'salePrice:ASC',
  });
  const classes = useStyles();
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filters);
        setProductList(data);
        console.log({ data, pagination });
        setPagination(pagination);
      } catch (error) {
        console.log('failed to fetch product list:', error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      _page: page,
    }));
  };
  const handleSortChange = (newSortValue) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      _sort: newSortValue,
    }));
  };
  const handleFilterChange = (newFilters) => {
    console.log('newfilter', newFilters);
    setFilter((prevFilter) => ({
      ...filters,
      ...newFilters,
    }));
  };
  return (
    <Box>
      <Container>
        <Grid>
          <Grid container spacing={1}>
            <Grid className={classes.left} item>
              <Paper elevation={0}>
                <ProductFilter
                  filters={filters}
                  onChange={handleFilterChange}
                />
              </Paper>
            </Grid>

            <Grid className={classes.right} item>
              <Paper elevation={0}>
                <ProductSort
                  currentSort={filters._sort}
                  onChange={handleSortChange}
                ></ProductSort>
                {loading ? (
                  <ProductSkeletonList length={9} />
                ) : (
                  <ProductList data={productList}></ProductList>
                )}
                <Box className={classes.pagination}>
                  <Stack spacing={2}>
                    <Pagination
                      count={Math.ceil(pagination.total / pagination.limit)}
                      page={pagination.page}
                      onChange={handlePageChange}
                      color="primary"
                    />
                  </Stack>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
