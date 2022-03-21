const darkModeReducer = (state, action) => {
    let newState = state
    switch (action.type) {
        case 'LIGHT':
            newState = { ...state, darkMode: false }
            break;
        case 'DARK':
            newState = { ...state, darkMode: true }
            break;
        case 'TOGGLE':
            newState = { ...state, darkMode: !state.darkMode }
            break;
        default:
            break;
    }
    return newState
}

export default darkModeReducer;