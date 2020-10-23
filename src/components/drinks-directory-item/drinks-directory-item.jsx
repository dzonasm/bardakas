import React from 'react'
import './drinks-directory-item.scss'

import drinksDirectory from '../../resources/drinks-directory'
import MenuItem from '../menu-item/menu-item.component'

function DrinksDirectoryItem() {
    const sections = drinksDirectory
    return (
        <div className='directory-menu'>
            {sections.map(({ id, title, linkUrl, imageUrl, width }
            ) => (
                    <MenuItem key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl} width={width} />
                ))}
        </div>
    )
}

export default DrinksDirectoryItem;