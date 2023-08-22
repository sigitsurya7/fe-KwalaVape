import axios from "axios"
import Swal from "sweetalert2"

const axiosInstance = () => {
    const token = localStorage.getItem('token')
    const instance = axios.create({
      baseURL: '/v1',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    instance.interceptors.response.use(
      response => response,
      error => {
        if (error.response && error.response.status === 401) {
          Swal.fire({
            icon: 'error',
            text: 'You Session Has Been Expired.',
            showConfirmButton: false,
            timer: 3000
          }).then(() => {
            localStorage.removeItem('token')
            window.location.reload()
          })
        }
        return Promise.reject(error)
      }
    )
  
    return instance
}

export const post = (endpoint, formdata) => {
    const url = `/${endpoint}`;
  
    return axiosInstance().post(url, formdata)
      .then(response => response.data)
      .catch(error => {
        throw new Error("POST request failed: " + error.message);
      });
  }