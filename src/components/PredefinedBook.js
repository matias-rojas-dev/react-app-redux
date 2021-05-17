import React from 'react';
import { booksSearchPredefined } from "../constants";
import axios from 'axios';
import Book from "./Book";
import { useEffect, useState } from "react";
import propTypes from 'prop-types';

const PredefinedBook = ({book}) => {
    
    const [doneFetch, setDoneFetch] = useState(false);
    const [result, setResult] = useState();

    const getPredefinedData = () => {
        const query = book;
        axios.get(booksSearchPredefined(query))
            .then(data => {
                setResult(data.data.items);
                setDoneFetch(true);
            })
    };

    useEffect(() => {
        getPredefinedData();
    }, []);


    return (
        <div>
            <h3 className='predefined__title'>{book}</h3>
            <div className='predefined__section'>
                {
                    !doneFetch ?
                        <h3>Loading</h3>
                        : result.map(book => (
                            <Book key={book} data={book} />
                        ))
                }

            </div>
        </div>
    )
}

PredefinedBook.propTypes = {
    doneFetch: propTypes.bool,
    result: propTypes.array,
}

PredefinedBook.displayName = 'PredefinedBook';

export default PredefinedBook;