import { useEffect } from "react";
import useGetUserDetails from "../../hooks/user/useGetUserDetails";
import { useNavigate } from "react-router";

const IsLogged = () => {

  const nav = useNavigate();
  const UserGetUserDetails = useGetUserDetails();

  let token = localStorage.getItem('token') || sessionStorage.getItem('token');

  useEffect(() => {
    if (token) {
      console.log('sim');
      UserGetUserDetails(token).then((data) => {
        if (data.status === 401) {
          nav('/login');
        } else if (data.status === 204) {
          nav('/createuserdetails');
        }
      }).catch(() => {
        nav('/login')
      });

    } else {
      nav('/login')

    }

  }, [token]);


}

export default IsLogged;