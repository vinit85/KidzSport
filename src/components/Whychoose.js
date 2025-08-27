import React from 'react';
import { Link } from 'react-router-dom';
import speaker1 from '../assets/images/speaker1.png';
import troffy from '../assets/images/troffy.png';
import imaginpicture from '../assets/images/imaginpicture.png';
import happycustomer from '../assets/images/happycustomer.png';
import youngboy from '../assets/images/young-boy.png';
import rightarrows from '../assets/images/rightarrows.png';

function Whychoose() {
    return (
        <section className="choose">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div>
                            <h2 className="why-choose pt-3 py-2">Why Choose Us</h2>
                        </div>

                        <p className="sports-pg">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit Ut et massa mi. Aliquam in hendrerit urna.
                        </p>

                        <Link to="/aboutus">
                            <button className="know more1 mt-3">Know More <span className='img-right-arrow img-right-arrows'>
                                <img src={rightarrows} alt='' /> </span>
                            </button>
                        </Link>
                        <div className='youn-boy-img-with-bat'>
                            <img src={youngboy} alt="" className="young-boy" />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="border-or-one">
                                    <div className="d-flex gap-3 align-items-baseline">
                                        <div className="choose-input">
                                            <img src={speaker1} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">1:1</p>
                                            <p className="sports-pg">
                                                Optimizing staffo-camper of the
                                                ratios for our personalized
                                                camp experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border-or-two">
                                    <div className="d-flex gap-3 align-items-baseline">
                                        <div className="choose-input1">
                                            <img src={imaginpicture} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">13+</p>
                                            <p className="sports-pg">
                                                Optimizing staffo-camper of the
                                                ratios for our personalized
                                                camp experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border-or-three">
                                    <div className="d-flex gap-3 align-items-baseline">
                                        <div className="choose-input2">
                                            <img src={troffy} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">08+</p>
                                            <p className="sports-pg">
                                                Prestigious award signifies remarkable achievement,
                                                this honoring dedication and excellence
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="border-or-four">
                                    <div className="d-flex gap-3 align-items-baseline">
                                        <div className="choose-input3">
                                            <img src={happycustomer} alt="" className="emoji-content-img" />
                                        </div>
                                        <div>
                                            <p className="ratios">100%</p>
                                            <p className="sports-pg">
                                                Optimizing staffo-camper of the
                                                ratios for our personalized camp
                                                experiences.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Whychoose;
