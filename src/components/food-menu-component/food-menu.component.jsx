import React from 'react'
import './food-menu-component.styles.scss'
import foodList from '../../resources/food-list'

function FoodMenu() {

    const content = foodList.map(food =>
        <div key={food.id} className='food-box' style={{
            backgroundImage: `url(${food.image})`
        }}>
            <h1 className='food-title'>{food.title}</h1>
            <div className='overlay'>
                <p className='food-description'>{food.description}</p>
                <p className='price'>{food.price}  €</p>
            </div>
        </div>
    )


    return (
        <div className='food-grid'>{content}</div>
    )
}

export default FoodMenu;




