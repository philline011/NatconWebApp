import {API_URL} from '../config'
import axios from 'axios'

export const getEarthquakeInformation = (callback) => {
    axios.get(`${API_URL}/api/analysis/get_earthquake_information`).then((response) => {
        callback(response.data)
    }).catch((error) => {
    
    });
}