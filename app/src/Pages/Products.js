import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import Loader from '../components/StyledComponents/Loader';
import { Popup } from '../components/Popup/Popup';
import { Box } from '@mui/material';
import { useRef } from 'react';
import { useCallback } from 'react';
import useItemSearch from '../components/CustomHooks/API/useItemSearch';
import { styled } from '@mui/system';
import { setPageNumber } from '../Pages/pagesSlice';

const CardContainer = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '5%',
  gap: '30px',
  backgroundColor: '#F5F8FC',
  minHeight: '100vh',
  width: '100vw'
}));


function Products() {
  const { status } = useSelector(state => state.items)
  const { query, pageNumber, limit } = useSelector(state => state.pages)
  const { items, hasMore, loading, error} = useItemSearch(query, pageNumber, 'https://jsonplaceholder.typicode.com/todos', limit);

  const dispatch = useDispatch();
 
  const observer = useRef(null);
  const lastListElementRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore){
          dispatch(setPageNumber({pageNumber: pageNumber + 1}))
        }
    });
    if (node) observer.current.observe(node)
  }, [loading, hasMore])
  


  return (
    <CardContainer className='app'>
        {error && <h2>Error: {error}</h2>}
        {items &&
          items.map((item, index) => {
            if (items.length === index + 1) {
              return <Card ref={lastListElementRef} key={item.id} {...item} />;
            } else {
              return <Card key={item.id} {...item} />;
            }
          })}
        {loading && <Loader />}
        <Popup title={'Hello there!'} />
      </CardContainer>   
  );
}

export default Products;
