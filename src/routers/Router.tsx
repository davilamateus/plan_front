import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import HomePage from '../pages/home';
import { Provider } from 'react-redux';
import Store from '../store';
import Message from '../components/messages';
import ConfirmEmail from '../pages/confirmEmail';
import ForgetPassword from '../pages/forgetPassword';
import CreateUserDetails from '../pages/createUserDetails';





function AppRouter() {


    return (
        <BrowserRouter>
            <Provider store={Store} >
                <Message />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/confirmemail/:token' element={<ConfirmEmail />} />
                    <Route path='/newpassword/:token' element={<ForgetPassword />} />
                    <Route path='/createuserdetails' element={<CreateUserDetails />} />
                </Routes>
            </Provider>
        </BrowserRouter>
    )
}

export default AppRouter;