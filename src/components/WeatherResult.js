import React, { useState } from 'react'
import style from './weather.module.css'


const WeatherResult = ({ weatherCast }) => {    
    const { name, sys, main, weather, wind } = weatherCast // destructuring for the elements
    const [date, setDate ] = useState(); // date is stored here

    const UpdateDate = () => {
        let getDate = new Date().toLocaleDateString(); //time constructor 
        setDate(getDate);
    }
    setInterval(UpdateDate, 1000 )

    return (
        <section className={style.result}>

            <div className={style.line1}>
                <h1 className={style.location}>{name}, {sys.country}</h1>
                <p className={style.date}>{ date }</p>
            </div>
                
            <div className={style.line2}>

                <div className={style.info}>
                    <p className={style.temp}>{Math.floor(main.temp)}{'\u00b0'}C</p>

                    <p className={style.hilow}>{Math.floor(main.temp_min)}{'\u00b0'}C / {Math.floor(main.temp_max)}{'\u00b0'}C</p>
                </div>

                <div className={style.icon}>
                    <p>{weather[0].main}</p>
                    <p className={style.icondescription}>
                    {weather[0].description}
                    </p>
                </div>
            </div>
            
            <div className={style.info2}>

                <p className={style.feel}><strong>Feels like:</strong> {main.feels_like}{'\u00b0'}C</p>

                <p className={style.wind}><strong>Wind speed:</strong> {wind.speed} mph </p>

                <p className={style.humidity}><strong>Humidity:</strong> {main.humidity}%</p>

                <p className={style.pressure}><strong>Air pressure:</strong> {main.pressure} mbar</p>
            </div>
        </section>
    )
}

export default WeatherResult