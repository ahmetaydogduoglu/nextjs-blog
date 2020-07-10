import { apiUrl } from "../constants"

const callFetch = (endpoint, method, body = null) => {
    return new Promise((resolve, reject) => {
        const url = apiUrl + endpoint;
        fetch(url, {
            method: method,
            body: body
        })
            .then(response => response.json())
            .then(data=> {
                console.log("resolve",data)
                resolve(data)})
            .catch(err => reject(err))
    })
}

export default callFetch;