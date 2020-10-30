import React from 'react'
import WeatherResult from './WeatherResult'

const Weather = ({ weather }) => {    
  return (
    <section> 
      { weather.map(weatherCast => {
        return <WeatherResult 
          key={weather.id}
          {...weatherCast}
          weatherCast={weatherCast} 
        />
      })}
    </section>
  )
}

export default Weather;