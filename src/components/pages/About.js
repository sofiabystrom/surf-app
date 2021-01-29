import React, { Component } from 'react';

export class About extends Component {
    render() {

        return (
                <div className="main">
                    <section>
                        <div className="card">
                            <div className="card-heading">
                                <h1>Om</h1>
                            </div>
                            <h4>Surfkollen är baserad på data hämtad från <a href="https://openweathermap.org/api">OpenWeathers API</a>. Applikationen ska underlätta surfares vardag genom att samla väderdata från Sveriges mest populära surforter i en tjänst. </h4>
                            <p className="credit">Video, startsida: <a href="https://www.pexels.com/@digitech?utm_content=attributionCopyText">Ruvim Miksanskiy</a> via <a href="https://www.pexels.com/">Pexels</a></p>
                        </div>
                    </section>
                </div>
            )
        }
}

export default About