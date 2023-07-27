const initState = {
    users: [
        {id: 1, name: 'Hung'},
        {id: 2, name: 'Tung'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;