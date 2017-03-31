import * as request from 'request-promise'


export const ENDPOINTS = {

    WEATHER_API_URL: 'https://freemusicarchive.org/api/get/tracks.json',


}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    } )
}