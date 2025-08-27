import React from 'react';
import footballplay from '../assets/images/footballplay.png'
import girlplay from '../assets/images/girlplay.png'
import rightarrow from '../assets/images/rightarrow.png'
import circleiconframe from '../assets/images/circleiconframe.png';
import { Link } from "react-router-dom";

function Event() {
  return (
    <section className="event">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-3 oder-set-one">
            <div className='circle-framee'>
            <img src={circleiconframe} alt='' className='circle-frame circle-frame-one floating-opposite'/>
            </div>
                <div className="text-center">
                    <div>
                        <img src={girlplay} alt="" class="girl-play"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 oder-set-two">
                <div className="text-center">
                    <div>
                        <p className="code">2024</p>
                    </div>
                    <div>
                        <h2 className="sports-kidz" > Sports Kidz Events</h2>
                    </div>
                    <div>
                        <p className="sports-pg"> provide a fun and engaging environment where children can participate
                            in various
                            physical activities, fostering teamwork and healthy competition. These events focus on
                            inclusivity, safety, and creating positive experiences for kids of all skill levels.</p>
                    </div>
                    <div class="d-flex gap-4 justify-content-center">
                        <div className='d-flex gap-2 align-items-center'>
                        <Link to="/Contactus"> <p className="phone1">Contact Us</p></Link>
                        <img src={rightarrow} alt="" class="right-arrow"/>
                        </div>
                        <div className='d-flex gap-2 align-items-center'>
                        <Link to="/events"><p className="phone2">View More</p></Link>
                        <img src={rightarrow} alt="" class="right-arrow"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 oder-set-three">
                <div className="text-center">
                    <div>
                        <img src={footballplay} alt="" class="girl-play boy-play"/>
                    </div>
                </div>
                <div className='circle-framee'>
            <img src={circleiconframe} alt='' className='circle-frame circle-frame-two floating'/>
            </div>
            </div>
        </div>
    </div>
</section>

  );
}

export default Event;
