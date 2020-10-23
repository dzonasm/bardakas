import React from 'react'

import './directory-item.styles.scss'

import Directory from '../../resources/directory'
import MenuItem from '../menu-item/menu-item.component'

function DirectoryItem() {
    const sections = Directory
    return (
        <div className='directory-menu'>
            {sections.map(({ id, title, linkUrl, imageUrl, width }
            ) => (
                    <MenuItem key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl} width={width} />
                ))}
        </div>
    )
}

export default DirectoryItem;