import React from 'react'

export default props =>(
    <header className='page-Header'>
        <h2>{props.name} <small>{props.smallName}</small></h2>
    </header>
)