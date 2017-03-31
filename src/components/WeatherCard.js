import React, { Component } from 'react'

import './WeatherCard.css'

class WeatherCard extends Component {

    render() {

        var { title, name, date_created, number, picture } = this.props


        return (

            <div className="card horizontal" style={ { margin: 'auto' } }>


                <div className="card-image weather-img-container">
                    <img alt="city" className="weather-img" src={ picture } />
                </div>
                <div className="card-stacked cyan darken-4">
                    <div className="card-content ">

                        <div className="weather-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>Date of publication: { date_created }</span>
                            </p>
                            <p>
                                <i className="material-icons">flag</i>
                                <span>Title: { title } </span>
                            </p>
                            <p>
                                <i className="material-icons">flag</i>
                                <span>Name of album: { name } </span>
                            </p>
                            <p>
                                <i className="material-icons">flag</i>
                                <span>Number of hit: { number } </span>
                            </p>

                        </div>

                    </div>
                    <div className="card-action center-align">
                        <a className="weather-city" href="#" onClick={ e => e.preventDefault() }>{ name }</a>
                    </div>
                </div>
            </div >
        )
    }

}

export default WeatherCard