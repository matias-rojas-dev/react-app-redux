//payload: data que devolverá cuando se ejecute una acción
export const setFavorite = (payload) => ({
    type: 'SET_FAVORITE',
    payload,
});

export const deleteFavorite = (payload) => ({
    type: 'DELETE_FAVORITE',
    payload,
});

export const setSection = (payload) => ({
    type: 'SET_SECTION',
    payload,
})

export const changingName = (displayName) => ({
    type: 'CHANGE_NAME',
    payload: {
        displayName
    }
})