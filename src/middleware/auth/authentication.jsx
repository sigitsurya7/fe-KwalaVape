import Swal from "sweetalert2";
import { post } from "../services/apiGtw";

export const handleLogin = async (user, handleResult) => {

    try {
      const formdata = new FormData();
      formdata.append('username', user.username);
      formdata.append('password', user.password);
  
      const response = await post('login', formdata);
  
      if(response.status = 200){
        const {fullname, access_token, role_name, is_active, phone} = response
  
        localStorage.setItem('fullname', fullname)
        localStorage.setItem('token', access_token)
        localStorage.setItem('role', role_name)
        localStorage.setItem('status', is_active)
        localStorage.setItem('phone', phone)

        localStorage.setItem('isLoggedIn', 'true')
  
        Swal.fire({
          icon: 'success',
          title: response.message,
          text: 'Login Success, You will be redirect',
          showConfirmButton: false,
          timer: 3000,
        }).then(() => {
          handleResult(role_name)
        })
      }
  
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: "Username or Password Is Wrong",
        timer: 3000,
        showConfirmButton: false
      })
    }
  };

export const isAuthenticatedUser = () => {
    const token = localStorage.getItem('token')
    let user = false
    if(token){
      if(localStorage.getItem('role') === 'User' ){
        user = true
      }
    }
    return !!user;
}

export const isAuthenticatedAdmin = () => {
  const token = localStorage.getItem('token')
  let user = false
  if(token){
    if(localStorage.getItem('role') === 'Admin' ){
      user = true
    }
  }
  return !!user;
}

export const isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
}

export const LogOutUser = () => {
  Swal.fire({
    icon: 'success',
    text: 'Log Out Success, You will be redirect',
    timer: 3000,
    showConfirmButton: false,
  }).then(() => {
    
    localStorage.clear();

    window.location.reload();
  })
}