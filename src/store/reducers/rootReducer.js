const initState = {
    users: [
        {id: 1, name: 'Hung'},
        {id: 2, name: 'Tung'},
        {id: 3, name: 'Nam'}
    ]
    //... other properties
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER': 
            let users = state.users;
            users = users.filter(user => user.id !== action.payload.id);
            return {
                ...state, users
            }
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 10001);
            let user = {id: id, name: `Random_${id}`};
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state;
    }
}

export default rootReducer;