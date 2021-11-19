import { FETCH_DATA } from "../type/type";

const initialState = {
    dataApi: []
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                dataApi: action.payload
            }
        default:
            return state
    } 
}

export default dataReducer