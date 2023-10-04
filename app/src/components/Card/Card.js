import React, {forwardRef} from 'react'; 
import { Button } from '../StyledComponents/Button.tsx';
import styled from 'styled-components';
import './Card.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../Pages/itemSlice';
import { showPopup } from '../Popup/popupSlice';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { ItemCard } from '../StyledComponents/Card.tsx';

const NewButton = styled(Button)`
  transform: translate(-50%, 125%); 
  position: relative;
  left: 50%;
  bottom: 0;
  opacity: 0;
  transition: 0.3s ease-out;
`
const Card = forwardRef(({ title, image, id, name }, ref) => {
    const cardTitle = title ? title : name;
    const Checked = window.localStorage.getItem(id);
    const dispatch = useDispatch();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { screen } = useSelector(state => state.screen);
    //console.log(screen)

    const handleChange = (event) => {
        const itemId = event.target.id;
        const isChecked = event.target.checked;
        dispatch(toggleFavorite({itemId, id, isChecked, cardTitle, image}))
    };
//localStorage.clear()
    return (
      <ItemCard className={`card__container ${screen}`} ref={ref} width={screen}>    
          <div className="card__info__container">
            <h1 className={`card__info name`} >{cardTitle}</h1>        
            <div className="card__info rate">
              <Checkbox {...label} id={`${id}`} icon={<FavoriteBorder сolor={'#FFCA42'} />} checkedIcon={ <Favorite />} checked={!!Checked} onChange={handleChange} />
            </div>
          </div>
          <NewButton primary="primary" className="card-button" onClick={() => dispatch(showPopup({cardTitle}))}>More info</NewButton> 
        </ItemCard>     
    );
  })
  export default Card;


