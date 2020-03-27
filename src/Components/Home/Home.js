import React from 'react'
import './Home.scss'

const Home = () => {
    return (
        <div className='home-body'>
            <p className='home-p'>Hello and welcome to lister. For more info on this project, and to see the code, visit my github by clicking the button below. If you want to see the app for yourself, click on login/register in the upper right. You can make your own login, or sign into the test account with the username "test" and password "test".</p>
            <button className='outline-button'>lister on github</button>
        </div>
    )
}

export default Home