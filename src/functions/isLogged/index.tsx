import { useEffect } from "react";
import useGetUserDetails from "../../hooks/user/useGetUserDetails";
import { useNavigate } from "react-router";
import useSetAvatar from "../../store/hooks/avatar/useSetAvatar";

const IsLogged = () => {

  const nav = useNavigate();
  const UserGetUserDetails = useGetUserDetails();
  const UseSetAvatar = useSetAvatar();

  let token = localStorage.getItem('token') || sessionStorage.getItem('token');

  useEffect(() => {
    if (token) {
      UserGetUserDetails(token).then((data) => {
        if (data.status === 200) {
          UseSetAvatar(
            data.data.name,
            data.data.email,
            data.data.city_local,
            data.data.state_local,
            data.data.country_local,
            data.data.city_trip,
            data.data.state_trip,
            data.data.country_trip,
            data.data.when,
            data.data.photo,
          )


        }
        else if (data.status === 401) {
          nav('/login');
        } else if (data.status === 204) {
          nav('/login');
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