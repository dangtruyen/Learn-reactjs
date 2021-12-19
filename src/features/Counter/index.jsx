import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 10,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 48px',
    margin: '0 10px'
  },
});

function CounterFeature(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const count = useSelector(state => state.counter); // state is root state

    const handleIncreseClick = () =>{
        const action = increase(); // action creator
        dispatch(action);
    }

    const handleDecreseClick = () =>{
        const action = decrease(); // action creator
        dispatch(action);
    }

    return (
        <div>
            Counter: {count}
            <div>
                <Button className={classes.root} onClick={handleIncreseClick}>Increse</Button>
                <Button className={classes.root} onClick={handleDecreseClick} >Decrese</Button>
            </div>
        </div>
    );
}

export default CounterFeature;