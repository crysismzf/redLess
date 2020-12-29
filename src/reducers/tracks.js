const initialState = [

];

export default function tracks(state = initialState, action) {
    if (action.type === "ADD_TRACK") {
        return [
            ...state,
            action.payload
        ]
    } else if (action.type === "CLEAN_TRACKS") {
        return []
    }
    return state;
}