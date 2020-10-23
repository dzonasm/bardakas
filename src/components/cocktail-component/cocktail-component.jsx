import React from 'react'

import "./cocktail.styles.scss"

import cocktailList from "../../resources/cocktail-list"

function Cocktail() {
    const cocktail = cocktailList


    const content = cocktail.map(cocktail => (
        <div key={cocktail.id} className='cocktail-box' style={{ backgroundImage: `url(${cocktail.image})` }}>

            <h1 className='cocktail-title'>{cocktail.name}</h1>
            <div className='cocktail-overlay'>
                <p className="tech">{cocktail.tech}</p>
                <p className="price">{cocktail.price}  €</p>
            </div>
        </div>))

    return (<div>
        <div className="cocktail-grid">{content}</div>
    </div>
    )
}

export default Cocktail

