import axios from 'axios';

export default() => {
    return axios.create({
        baseURL: `https://utaxon.com/utaxon`,
        withCredentials: false,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}