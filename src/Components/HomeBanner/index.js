import React, { Component } from 'react';
import banner from '../../Assets/header.png';
import logo from '../../Assets/rawLogo.png';
import { map } from 'lodash';
import { FaBars} from "react-icons/fa";
import './HomeBanner.css';

export default class HomeBanner extends Component {
    render(){
        return (
            <div className="homebannerContainer"
                style={{
                    backgroundImage: `url(${banner})`
                }}
            >
                {/* <img className="homebannerBackground" src={banner} /> */}
                <div className="homebannerMenu">
                    <div className="homebannerLogoContainer">
                        <img src={logo} className="homebannerLogo"/> Tranzolen
                    </div>

                    <div className="homebannerMenuLinksContainer">
                        {
                            map(links, (value)=>{
                                return (
                                    <div key={value} className="homeBannerMenuLink">
                                        {value}
                                    </div>
                                )
                            })
                        }
                    </div>
                    <FaBars 
                        className="homebannerContentMenuBar" 
                        size={40}
                        color="rgb(220,220,220)"
                    />
                </div>
                <div className="homebannerContent">
                    <div className="pitchContainer">
                            <div className="homebannerPitchTitle">
                                Clarity in your Cannabis
                            </div>
                            <div className="homebannerPitchBody">
                                Tranzolen is all about providing sustainable and responsible medical cannabis.
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

const links = [
    'About Us', 'Cannabis', 'Physicians', 'Careers', 'Contact Us', 'FAQ'
];