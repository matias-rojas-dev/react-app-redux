import React from 'react';
import { connect } from 'react-redux';
import Book from './Book';

const FavoriteList = (props) => {

    const { favoriteBooks } = props;

    return (
        <div>
            <h2 className='favoriteList_title'>Your favorite books!</h2>
            <div className='booklist__searched-container'>
                {
                    !favoriteBooks.length ?
                        <h3>Please, select your favorites books</h3>
                        : favoriteBooks.map((bookSearch) => (
                            <div>
                                <Book key={bookSearch.id} data={bookSearch.data} />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favoriteBooks: state.favoriteBooks,
        changeName: state.changeName,
    }
}

export default connect(mapStateToProps, null)(FavoriteList);