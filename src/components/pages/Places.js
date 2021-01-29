import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

/* assets */
import BackgroundVideo from '../../assets/Pexels Videos 1918465.mp4';
import jsonData from '../../assets/surfCities.json';

export class Places extends Component {

    render() {
        
        /* variabel med data från lokal json */
        const surfCities = jsonData;

        /* variabel med data från lokal video */
        const bgVideo = BackgroundVideo;
       
        return (
            <div className="main">
                <section>
                    <div className="places">
                        
                    {/* visa all data från json */}
                    {surfCities.map((item, key) => 
                        <h1 key={key}><Link to={`/detail/${item.cityid}`}>{item.name}</Link></h1>
                    )}
                    </div>
                </section>

                    {/* bakgrundsvideo */}
                    <video className="videoBackground" muted autoPlay loop>
                        <source src={bgVideo} type="video/mp4"/>
                        <source src={bgVideo} type="video/ogg"/>
                    </video>
            </div>
            
        )
    }
}

export default withRouter(Places)