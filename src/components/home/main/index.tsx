import React, { useEffect } from 'react'
import RadioComponent from '../../radio/main'
import Weather from '../weather/main'
import DaysToTravel from '../daysToTravel'
import './style.scss';
import NoticiesDashboard from '../../noticies/dashboard/main';
import ToDoListDashboard from '../../toDoList/dashboard';
import ExchangeDashboard from '../../exchange/dashboard';
import FinancesResume from '../../finances/entraces/resume';
import TitleOfComponent from '../../communs/titleOfComponent';
import TitleOfSession from '../../communs/titleOfSession';
import GetTimestampInfomartions from '../../../functions/date/GetTimestampInfomartions';
import AdsDashboard from '../../ads/dashboard';
import AdvicesDashboard from '../../advices/dashboard/main';
import TitleOfComponentOnDashnboard from '../../communs/titleOfComponentOnDashnboard';
import AdviceCategorieCard from '../../advices/dashboard/card';
import AdvicesCategorie from '../../advices/categories/main';







const HomeMain = () => {


    return (
        <div className='home-main '>
            <div className="home-column-1">
                <div className="home-weather-dayToTrip">
                    <Weather />
                    <DaysToTravel />
                </div>
                <div>
                    <TitleOfComponentOnDashnboard title='Noticies' link='/noticies' />
                    <NoticiesDashboard />
                </div>
                <RadioComponent />
            </div>
            <div className="home-column-2">
                <div>
                    <TitleOfComponentOnDashnboard title='To do list' link='/todolist' />
                    <ToDoListDashboard />
                </div>
            </div>
            <div className="home-column-3">
                <div className='home-column-3-item'>
                    <TitleOfComponentOnDashnboard title='Exchange' link='/exchange' />
                    <ExchangeDashboard />
                </div>
                <div className="finance-resume-dashboard home-column-3-item'">
                    <TitleOfComponentOnDashnboard link='/finances' title={`Finances of ${GetTimestampInfomartions(new Date().getTime(), 0).nameOfMonth}`} />
                    <div className='box finance-resume-dashboard-content'>
                        <FinancesResume />
                    </div>

                </div>
                <div className='home-column-3-item home-deal'>
                    <TitleOfComponentOnDashnboard title='Deal' />
                    <AdsDashboard />
                </div>
            </div>
            <div className="home-column-4">
                <div>
                    <TitleOfComponentOnDashnboard link='/advices' title={`Advices`} />
                    <AdvicesDashboard />

                </div>

            </div>
        </div>
    )
}

export default HomeMain