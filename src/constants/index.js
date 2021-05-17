const base_url = 'https://www.googleapis.com/books/v1/volumes?q=';
const api_key = '&key=AIzaSyDXrl1PB2RFqlCofGfp2kPur3zV88E-8gY';

export const booksSearch = query => `${base_url}${query}${api_key}&maxResults=15`;
export const booksSearchPredefined = query => `${base_url}${query}${api_key}&maxResults=9`;
export const searchGif = 'https://media.tenor.com/images/e791327361a8ed1c377aacfce9f52251/tenor.gif';

