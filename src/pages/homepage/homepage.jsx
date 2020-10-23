import React from 'react'
import DirectoryItem from "../../components/directory-item-component/directory-item.component"
import './homepage.styles.scss'

function Homepage() {
    return (
        <div className='home-page'>
            <DirectoryItem />
        </div>
    )
}

export default Homepage;