import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import IsLogged from '../functions/isLogged';
import { useEffect } from 'react';
import HomePage from '../pages/home';
import { Provider } from 'react-redux';
import Store from '../store';
import Message from '../components/messages';
import ConfirmEmail from '../pages/confirmEmail';





function AppRouter() {

    useEffect(() => {
        IsLogged();
    }, [])

    return (
        <BrowserRouter>
            <Provider store={Store} >
                <Message />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/confirmemail/:token' element={<ConfirmEmail />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default AppRouter;