export const initialState = {
    user: null,
    playList: [],
    playing: false,
    item: null,
    discover_weekly:null,
    top_artists: null,
    // token:null
    // token: "BQDa7b4bIdRr8eESwEFwsxYFceZMarHOQkVkUUj4JQUdvrE3nLwle9Tny90_BJvEuwRVLFd-vC4f3VREWp12vfkAtzWvK4wPPoS4Q9WI4OmojyX4urYTMDoA9LuJdihrOC4hSwOqdTnu7APSNaPAIAgdDKWjXnJKFwnCvkyZrt6B1c9UcqDb"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload }
        case 'SET_TOKEN':
            return { ...state, token: action.payload }
        case 'SET_PLAYLIST':
            return { ...state, playList: action.payload }
            case 'SET_DISCOVER_WEEKLY':
                return { ...state, discover_weekly: action.payload }
        default:
            return state;
    }
}


export default reducer;



















