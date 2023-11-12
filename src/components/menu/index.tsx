import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss'
import LogoBottom from '../communs/logoBottom'

const Menu = () => {

    const [pageActived, setPageActive] = useState('')
    useEffect(() => {
        setPageActive(window.location.pathname.split('/')[1]);
    }, [useNavigate()])
    return (
        <main>
            <div className='menu-box box'>
                <div className="logo-menu">
                    <Link to={'/'}>
                        <LogoBottom />
                    </Link>
                </div>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link className={pageActived === '' ? 'active' : ''} to={'/'}>
                                <div >
                                    <img src="./../../..//icons/home.svg" alt="" />
                                </div>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={pageActived === 'noticies' ? 'active' : ''} to={'/noticies'}>
                                <div >
                                    <img src="./../../../icons/blog.svg" alt="" />
                                </div>
                                <p>Notices</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={pageActived === 'advices' ? 'active' : ''} to={'/advices'}>
                                <div >
                                    <img src="./../../../icons/advices.svg" alt="" />
                                </div>
                                <p>Advices</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={pageActived === 'todolist' ? 'active' : ''} to={'/todolist'}>
                                <div >
                                    <img src="./../../../icons/todolist.svg" alt="" />
                                </div>
                                <p>To Do List</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={pageActived === 'finances' ? 'active' : ''} to={'/finances'}>
                                <div >
                                    <img src="./../../../icons/finance.svg" alt="" />
                                </div>
                                <p>Finances</p>
                            </Link>
                        </li>
                        <li>

                            <Link className={pageActived === 'exchange' ? 'active' : ''} to={'/exchange'}>
                                <div  >
                                    <img src="./../../../icons/money.svg" alt="" />
                                </div >
                                <p>Exchange</p>
                            </Link>
                        </li>
                        <li>
                            <Link className={pageActived === 'myaccount' ? 'active' : ''} to={'/myaccount'}>
                                <div >
                                    <img src="./../../../icons/user.svg" alt="" />
                                </div>
                                <p>My Account</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="exit">
                    <img src="./../../../icons/exit.svg" alt="" />
                    <p>Exit</p>
                </div>
            </div>
        </main>

    )
}

export default Menu