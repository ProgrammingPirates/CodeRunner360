import axios from "axios";

//named axiosExecute bcz we are excuting the code.
const axiosExecute = axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
        "content-type": "application/json",
        "x-rapidapi-key": process.env.REACT_APP_ONLINE_JUDGE_API,
        "x-rapidapi-host": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC5+efKlo6oGol8fSyGs9FV+5yw79voa+nkh9uKZ7oLjWY+r7DIivKt9NhH3Sz8S3NdXB4znROe4GKsa5R4bbjoc2fCVmF9uJUiF1Mb1fLwZxXw+403jB8dwnsDdegJRk0m1ZUUBmyjGZczofR8nPkIOJ3KmoykWOKSg/xEBBLXRHQWMZb5cxxNahDJrXKGFPCVvfegHEUz1rJG3d7y9EWhgaqQlOJtFS/HJ2f+UN1s3MmTbYSvVZ+bYtZXm8Oe+uueAl1KsXTLnW0wPBkRRs2LczGHIMutagolGA3uOhAgTZ7idRvgC3NHgkCfJI8JuOyvHrqzf8yrtuDdmvsdAeym6aA0pF9vvJWl+TJH6Aueps62QGD2bsrFNsK7yiqjqGmp1xOk2NK6m9AJwJmEtQDLy5kHjblxAA7hlcP+z03b/IKE+ZwpJdggUqLfF2eBH8fUYAoXzkT3GIfSZ7HYBVTfM6O/LKb4iSaKmJ349eykt9h0Ky5BzphD5ilrP6A7vDKIeEllmj0RLc4hJnrRAcWdhYEqvfmLRA8kFk6XyPsr2ljiwmS2qo4MWVQgeLB94oHyqubjL6lKAkJJO3KP9e9+H9KeDkhwTegNHrrQ1U8BIDesW4g2BgGnd77kZI8Ro9dar6uDdHi9QVHUOp0KstoeDwGsHH3HYcZ5xf3gHXue+w==",
    },
})


export default axiosExecute;
