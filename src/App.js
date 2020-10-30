import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Search from './components/Search'
import Weather from './components/Weather'

require('dotenv').config()

function App() {
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [search, setSearch ] = useState(''); // the state for search of the weather
  const [query, setQuery ] = useState('Akure'); // the state that holds the search item before submitting until the search button is pressed
  const [weather, setWeather] = useState([]); // the state of array where the weather is stored
  
  const API_KEY= process.env.REACT_APP_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/";
  
  useEffect(() => {
    const getWeather = async () => {
      setIsError(false);
      setLoading(true);
      
      try {
        const fetchWeather = await fetch(`${API_URL}weather?q=${query}&units=metric&APPID=${API_KEY}`)
        const data = await fetchWeather.json()
        setLoading(false)
        setWeather([data])
        //console.log(data)
      } catch (error) {
        setIsError(true);
        setLoading(false);
        console.log(error);
      }
    }
    getWeather();
  }, [query])

  //input the item you want to search
  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  //handles the search you submit for search
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(search)
    //setSearch('')
  }

  if (loading) {
    return (
      <section>
        <header>
          <h1>Weather App</h1>
        </header>

        <main>
          <Search handleInput={handleInput} handleSubmit={handleSubmit} />
          <Loading />
        </main>
      </section>
    )
  }
    if (isError) {
    return (
      <section>
        <header>
          <h1>Recipe App</h1>
        </header>

        <main>
          <Search handleInput={handleInput} handleSubmit={handleSubmit} />

          {isError && <div className="error">Something went wrong...</div>}
          
        </main>
      </section>
    )
  }
  return (
    <section>

      <header>
        <h1>Weather App</h1>
      </header>

      <main>
        <Search handleInput={handleInput} handleSubmit={handleSubmit} />

        <Weather weather={weather} />
      </main>
      
    </section>
  );
}

export default App;