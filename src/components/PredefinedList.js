import React from 'react';
import PredefinedBook from './PredefinedBook';

const PredefinedList = () => {
    const choose = [
        'Naruto',
        'Marvel Studios',
        'DC Comics',
        'Japanese Stories',
        'React JS',
        'Angular JS',
        'Javascript',
    ]
    return (
        <div>
            <h2 className='favoriteList_title'>Predefined list</h2>
            <div className='booklist__searched-container'>
                {
                    choose.map(book => (
                        <PredefinedBook book={book} />
                    ))
                }
            </div>
        </div>
    )
}

export default PredefinedList;