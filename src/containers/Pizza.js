/**
 * Created by Ricardo Baquero on 27/05/2018.
 * Copyright BuenPlan, 2017.
 */
import React, {Component} from 'react';

import PizzaImage from "../components/PizzaImage/PizzaImage";

class Pizza extends Component {

    render() {
        return (
            <div>
                <h1>The Pizza</h1>
                <PizzaImage/>
            </div>
        );
    }

}

export default Pizza;