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
        case 'filters/selectFilters': {
            return {
                ...state,
                site: action.payload.site,
                ability: action.payload.ability,
            }
        }
        default:
            return state
    }
}