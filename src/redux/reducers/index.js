const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_FAVORITE':
            return {
                ...state,
                favoriteBooks: [...state.favoriteBooks, action.payload],
            };

        case 'DELETE_FAVORITE':
            return {
                ...state,
                favoriteBooks: state.favoriteBooks.filter(
                    (items) => items.data.id !== action.payload
                ),
            };

        case 'SET_SECTION':
            return {
                ...state,
                sectionActive: action.payload,
            };

        case 'CHANGE_NAME':
            return {
                ...state,
                changeName: action.payload,
            }
        
        default : 
            return state

    }
}

export default reducer;