import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import arrowjoin from '../assets/images/arrowjoin.png';
import twolines from '../assets/images/twolines.png';

function Programm() {
    const [latestEvents, setLatestEvents] = useState([]);

    useEffect(() => {
        fetchLatestEvents();
    }, []);

    const fetchLatestEvents = async () => {
        try {
            const response = await axios.get("https://mitdevelop.com/kidsadmin/api/latest-events");
            setLatestEvents(response.data.events || []);
        } catch (error) {
            console.error("Error fetching latest events:", error);
        }
    };

    return (
        <section className="program">
            <p className="text-center Our-programs-color">Our programs</p>
            <div className='two-lines-img'>
                <img src={twolines} alt="" className="two-lines-img-one" />
            </div>
            <h2 className="text-center">
                Young Minds<br/>
                Adventures and Innovations
            </h2>
            <div className="container box-program-main">
                <div className="row program-mobile-preview">
                    {latestEvents.length > 0 ? (
                        latestEvents.map((event, index) => (
                            <div className="col-lg-4 wid-program" key={index}>
                                <div className="img1">
                                    <div>
                                        <img src={`https://mitdevelop.com/kidsadmin/storage/app/public/${event.event_image}`} alt={event.event_name} className="child-sports" />
                                    </div>
                                    <div>
                                        <h5 className="Activities">{event.event_name}</h5>
                                    </div>
                                    <div>
                                        <p className="sports-pg">{event.description}</p>
                                    </div>
                                    <div className="d-flex gap-4 justify-content-between align-items-center">
                                        <p className="old">{event.age_group || "All Ages"}</p>
                                        <Link to={`/event/${event.slug}`} className="program-link">
                                            <button className='join-now'>View more <span><img src={arrowjoin} alt="" className="arrow-circle-img" /></span></button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center">
                            <p>No latest events available.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Programm;
