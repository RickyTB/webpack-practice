/**
 * Created by Ricardo Baquero on 27/05/2018.
 * Copyright BuenPlan, 2017.
 */
import React from 'react';

import classes from './PizzaImage.css';
import PizzaImage from '../../assets/pizza.jpg';

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImage} className={classes.PizzaImg} alt="Pizza"/>
    </div>
);

export default pizzaImage;