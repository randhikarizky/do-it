import { FETCH_DATA } from '../type/type'

import axios from '../../api/api'

const fetchData = () => async (dispatch) => {
    try { 
        const response = await axios({
            method: 'get',
            url: '/todo/1.0.0/to-do-list'
        })

        dispatch({
            type: FETCH_DATA,
            payload: response.data
        })
    } catch (ex) {
        console.log(ex)
    }
}

const dataAction = {
    fetchData
}

export default dataAction