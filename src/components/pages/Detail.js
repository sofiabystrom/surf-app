import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

export class Detail extends Component {
    
    /* komponentens egenskaper */
    constructor(props) {
        super(props);
        this.state = {
        isLoaded: true,
        weatherInfo: [],
        error: null
        } 
    }

    /* hämta data */
    fetchData(id) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&units=metric&appid=71ec25abc9fbe273c2375eefd8d36dee&lang=sv`)
        .then(response => response.json())
        .then(data => {
            this.setState ({
                weatherInfo: data,
                isLoaded: false,
            })
        })

        /* errorhantering */
        .catch (error =>
            this.setState ({
                error,
                isLoaded: false
            }))
        }
        
    /* komponent färdigbyggd */
    componentDidMount() {
        this.fetchData(this.props.match.params.id)
    }


    render() {

        /* variabler för egenskaperna */
        const {isLoaded, 
              weatherInfo, 
              error} = this.state;
        
        /* variabler för bra/dåliga surfvågor */
        const goodWave = ' och är en perfekt dag för surf!';
        const badWave = ' och är tyvärr inga vidare surfvågor idag';

        return (

            /* returnera flera element */
            <React.Fragment>
                {/* error */}
                {error ? <p>{error} Nu blev det fel...</p> : null}

                {/* när innehållet är färdigladdat */}
                {!isLoaded ? (
                    <div className="main">
                        <section>
                            <div className="card">
                                <div className="card-heading">
                                    {/* ortsnamn som visas, byt ut mätplats till specifik plats */}
                                    {(weatherInfo.name) === 'Visby' ? <h1>Ekeviken</h1> : null}
                                    {(weatherInfo.name) === 'Varberg' ? <h1>Apelviken</h1> : null}
                                    {(weatherInfo.name) === 'Höganäs' ? <h1>Mölle</h1> : null}
                                    {(weatherInfo.name) === 'Husum' ? <h1>Salusand</h1> : null}
                                    {(weatherInfo.name) === 'Nynäshamn' ? <h1>Torö</h1> : null}
                                    {(weatherInfo.name) === 'Simrishamn' ? <h1>Vik</h1> : null}
                                    {(weatherInfo.name) === 'Åsa' ? <h1>Åsa</h1> : null}
                                </div>

                                {/* vindinformation, villkor för surfvågor */}
                                <h4>Det blåser <strong>{Math.round((weatherInfo.wind.speed) * 10)/10} m/s</strong>
                                {(weatherInfo.wind.speed) >= 10 ? goodWave + ' 🏄🏼' : badWave + ' 🙁' }</h4>

                                {/* väderinformation */}
                                <div className="card-weather">
                                    <h1>{Math.round(weatherInfo.main.temp)} °c</h1> 
                                    <div className="card-icon"><img src={`http://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`} alt="Väderikon"></img></div>
                                    <h4>{(weatherInfo.weather[0].description).charAt(0).toUpperCase() + (weatherInfo.weather[0].description).slice(1)}</h4>
                                </div>
                                <Link to="/">Tillbaka</Link>
                            </div>
                        </section>
                    </div>
                
                /* när sidan laddas */
                ) : (
                    <div className="main">
                        <section>
                            <h4>Laddar...</h4>
                        </section>
                    </div>
                )}
            </React.Fragment>
        )
    }
}

export default withRouter(Detail)