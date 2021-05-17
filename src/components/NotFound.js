import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
    return (
        <div className='notfound__container'>
            <h2>404</h2>
            <h3>Page not found :(</h3>
            <Link to='/main/search'>
                <button>
                    COME BACK TO SEARCH PAGE
                </button>
            </Link>
        </div>
    )
}
