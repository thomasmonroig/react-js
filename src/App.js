/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import defaultPicture from './components/img/default.jpg'

const Materialize = window.Materialize

const APP_TITLE = 'Music For Life'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import WeatherCard from './components/WeatherCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            weather: undefined,
            city: ''
        }
    }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>

                </div>

                <div className="App-content">
                    <div className="center-align">

                        <form onSubmit={ this.fetchWeather }>

                            <div className="row" style={ { marginBottom: 0 } }>

                            </div>

                            <button type="submit" className="waves-effect waves-light btn">
                                Music ?
                            </button>

                        </form>

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayWeatherInfo() }
                        </div>
                    </div>
                </div>

            </div>
        )
    }



    handleChange = ( event ) => {
        this.setState( {
            city: event.target.value
        } )
    }


    //method triggered by onSubmit event of the form or by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchWeather = async ( event ) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            let weather = await get( ENDPOINTS.WEATHER_API_URL, {
                //YOU NEED TO PROVIDE YOUR "APIXU" API KEY HERE, see /utils/api.js file to grab the DOCUMENTATION file
                api_key: '7QDJPCT7QMJ29QOT',

            } )

            console.log( weather )

            this.setState(
                { weather: weather }
            )


        }
        catch ( error ) {
            Materialize.toast( error, 8000, 'error-toast' )
            console.log( 'Failed fetching data: ', error )
        }

    }



    //handle display of the received weather object
    displayWeatherInfo = () => {
        const weather = this.state.weather

        if ( weather ) {

            return weather.dataset.map( function ( dataset ) {
                return < WeatherCard

                    date_created={ dataset.track_date_created }
                    title={ dataset.album_title }
                    name={ dataset.artist_name }
                    number={ dataset.track_number }
                    picture={ dataset.track_image_file }
                />
            }
            )
        }

        return null
    }

}

export default App
