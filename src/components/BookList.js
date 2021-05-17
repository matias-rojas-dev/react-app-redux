import React from 'react';
import {searchGif} from '../constants/index'
import Book from './Book';
import useForm from '../custom-hooks/useForm';
import propTypes from 'prop-types';

const BookList = () => {

    const {handleChange, handleSubmit, result, doneFetch} = useForm();

    return (
        <div className='booklist__container'>
            <div className ='booklist__box'>
                <h1 className='booklist_title'>Search some books</h1>

                <form onSubmit={handleSubmit} className='booklist__form' >
                    <input
                        autoComplete='none'
                        className='booklist_input'
                        type='text'
                        placeholder='Search a book'
                        onChange={handleChange}
                    />

                    <button
                        type='submit'
                        className='booklist__button'
                    >
                        <i class="fas fa-search" />
                    </button>
                </form>
            </div>

            <div className='booklist__searched-container'>

                {
                    !doneFetch ?
                        <img className='booklist__gif' src={searchGif} alt='Not results' /> 
                    : result.map(book => (
                        <Book key={book} data={book} />
                    ))
                }
            </div>
        </div>
    )
}

BookList.propTypes = {
    doneFetch: propTypes.bool,
    result: propTypes.array
}

export default BookList;