import axios from "axios";

//named axiosExecute bcz we are excuting the code.
const axiosExecute = axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        "content-type": "application/json",
        "x-rapidapi-key": process.env.REACT_APP_ONLINE_JUDGE_API,
        "x-rapidapi-host": "",
    },
})


export default axiosExecute;
