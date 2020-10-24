import React, { useState } from 'react'

import FoodMenu from '../../components/food-menu-component/food-menu.component'
import Cocktail from '../../components/cocktail-component/cocktail-component'
import './menu-page.styles.scss'




function MenuPage() {

    const [choose, handleChoose] = useState('food')

    const chooseFood = () => {
        handleChoose("food")
    }

    const chooseDrinks = () => {
        handleChoose('drinks')
    }

    return (
        <div>
            <div className="switch">
                <div className='menu-options'>
                    <div className='menu-option' onClick={chooseFood}>Food</div>
                    <div className='menu-option' onClick={chooseDrinks}>Drinks</div>
                </div>
            </div>
            {
                choose === 'food' ? <FoodMenu /> : <Cocktail />
            }
        </div>
    )
}

export default MenuPage