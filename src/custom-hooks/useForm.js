import { useState } from 'react'
import { booksSearch } from '../constants';
import axios from 'axios';

const useForm = () => {

    const [book, setBook] = useState('');
    const [result, setResult] = useState([]);
    const [doneFetch, setDoneFetch] = useState(false);


    const handleChange = (e) => {
        e.preventDefault();
        const book = e.target.value;
        setBook(book)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const query = book;

        axios.get(booksSearch(query))
            .then(data => {
                setResult(data.data.items);
                setDoneFetch(true);
            })
    };


    return {handleChange, handleSubmit, result, doneFetch}

}

export default useForm;