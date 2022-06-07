import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "http://www.omdbapi.com/?apikey=[yourkey]&",
    headers: {
        "API-KEY": "0ab1e7b3-e560-4134-9877-af2e3009657c"
    }
})

export const usersAPI = {
    // getMovies() {
    //     return instance.get()
    //         .then(response => {
    //             return response.data
    //         })
    // },

}
