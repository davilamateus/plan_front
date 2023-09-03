
const IsLogged = () => {
  const local = localStorage.getItem('token');
  const session = sessionStorage.getItem('token');
  const http = window.location.pathname.split('/')[1];


  if (!local && !session && http !== 'login') {
    window.location.href = '/login';
  }
}

export default IsLogged