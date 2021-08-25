export default function inputReducer(state, action) {
    switch (action.type) {
        case 'agent/selectAgent': {
            return {
                ...state,
                agent: action.payload,
            }
        }
        case 'map/selectMap': {
            return {
                ...state,
                map: action.payload,
            }
        }
        default:
            return state
    }
}