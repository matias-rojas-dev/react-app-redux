import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {setFavorite, deleteFavorite} from '../redux/actions';
import propTypes from 'prop-types';

const Book = (props) => {
    
    const {data, favoriteBooks} = props;
    const {id} = data;
    const {title, imageLinks } = data.volumeInfo;
    const [favorite, setFavorite] = useState(false);

    const handleDeleteFavorite = (id) => {
        props.deleteFavorite(id);
        setFavorite(false)
    };

    const handleSetFavorite = () => {
        props.setFavorite({ data });
        setFavorite(true)
    };

    const isFavorite = () => {
        const result = favoriteBooks.filter(
            (favoriteBooks) => favoriteBooks.data.id === id
        );

        if(result.length) setFavorite(true); 
    };

    useEffect(() => {
        isFavorite()
    });
    
    return (
        <div>
            <div className={favorite ? 'book__card borderFavorite' : 'book__card'}>
                <img src={imageLinks === undefined ? '' : `${imageLinks.thumbnail}`} />
                <p>{title.length > 15 ? title.substr(0, 15) + '...' : title}</p>
                {
                    favorite ? 
                        <button className='book__button btn-favorite' type='submit' onClick={() => handleDeleteFavorite(id)}>FAVORITE</button>
                    : <button className='book__button' type='submit' onClick={handleSetFavorite}>FAVORITE</button>
                }
            </div>
        </div>
    )
};

Book.propTypes = {
    favorite: propTypes.bool,
    imageLinks: propTypes.object,
    title: propTypes.string,
};

Book.displayName = 'Book';

const mapStateToProps = (state) => {
    return {
        favoriteBooks: state.favoriteBooks,
    }
};

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
}

export default connect(mapStateToProps, mapDispatchToProps)(Book);