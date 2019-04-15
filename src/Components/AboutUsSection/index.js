import React, { Component } from 'react';
import hipsters from '../../Assets/hipsters.png';
import './AboutUsSection.css';

export default class AboutUsSection extends Component {
    render(){
        return (
            <div className="aboutusContainer">
               {/* <div>

               </div> */}
                <div 
                    className="aboutusImage"
                    style={{
                        backgroundImage: `url(${hipsters})`
                    }}
                />
                <div className="aboutusMessage">
                    Yolo
                </div>
            </div>
        )
    }
}
