import React, { useEffect } from 'react';
import imagetestominal from '../assets/images/imagetestominal.png';
import profilereview from '../assets/images/profilereview.png';
import quotegreen from '../assets/images/quotegreen.png';
import childgroup from '../assets/images/childgroup.png';
import arrowslideone from '../assets/images/arrowslideone.png';
import arrowslidetwo from '../assets/images/arrowslidetwo.png';

function Testimonial() {
    useEffect(() => {
        const sliderContainer = document.querySelector('.slider-container');
        const testimonials = document.querySelectorAll('.testimonial');
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        let index = 0;
        let autoplayInterval;

        // Function to show the testimonial based on the index
        function showTestimonial(newIndex) {
            if (newIndex < 0) {
                index = testimonials.length - 1;
            } else if (newIndex >= testimonials.length) {
                index = 0;
            } else {
                index = newIndex;
            }
            sliderContainer.style.transform = `translateX(-${index * 100}%)`;
        }

        // Function to start autoplay
        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                showTestimonial(index + 1);
            }, 3000); // Change slide every 3 seconds
        }

        // Function to stop autoplay (e.g., on user interaction)
        function stopAutoplay() {
            clearInterval(autoplayInterval);
        }

        // Event listeners for manual navigation
        prevButton.addEventListener('click', () => {
            stopAutoplay();
            showTestimonial(index - 1);
            startAutoplay(); // Restart autoplay after manual interaction
        });

        nextButton.addEventListener('click', () => {
            stopAutoplay();
            showTestimonial(index + 1);
            startAutoplay(); // Restart autoplay after manual interaction
        });

        // Start autoplay on component mount
        startAutoplay();

        // Cleanup on component unmount
        return () => {
            stopAutoplay();
            prevButton.removeEventListener('click', () => { });
            nextButton.removeEventListener('click', () => { });
        };
    }, []);

    return (
        <>
            <section className="Testimonial">
                <div className="container purple-lg-review">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div><h2 class="text-center text-white">Testimonial</h2></div>
                            <div className='text-center'><img
                                src={quotegreen}
                                alt="Testimonial"
                                class="quote"
                            /></div>
                            <div className="testimonial-slider">
                                <div className="slider-container">
                                    <div className="testimonial">
                                        <p>
                                        KidzSports has been an amazing experience for my son. Not only has he improved his soccer skills, but he’s also made wonderful friends along the way!” 
                                        </p>
                                        <img
                                            src={profilereview}
                                            alt="Testimonial"
                                            class="girl-img"
                                        />
                                        <h3>Ranvijay Singh </h3>
                                        <h4>(Parent) </h4>
                                    </div>
                                    <div className="testimonial">KidzSports has been an amazing experience for my son. Not only has he improved his soccer skills, but he’s also made wonderful friends along the way!” 
                                        <p>
                                            My 10-year-old daughter recently participated in the kids' sports bootcamp offered by Kidscamp, and I can't say enough positive things about her experience. From start to finish, the program was incredibly well-organized, engaging, and fun for kids of all levels.
                                        </p>
                                        <img
                                            src={profilereview}
                                            alt="Testimonial"
                                            class="girl-img"
                                        />
                                        <h3>Jessica</h3>
                                        <h4>Mother of Gareema</h4>
                                    </div>
                                    <div className="testimonial">
                                        <p>
                                            My 10-year-old daughter recently participated in the kids' sports bootcamp offered by Kidscamp, and I can't say enough positive things about her experience. From start to finish, the program was incredibly well-organized, engaging, and fun for kids of all levels.
                                        </p>
                                        <img
                                            src={profilereview}
                                            alt="Testimonial"
                                            class="girl-img"
                                        />
                                        <h3>Jessica</h3>
                                        <h4>Mother of Gareema</h4>
                                    </div>

                                </div>
                                <div className="slider-controls">
                                    <button id="prev"> <img
                                    src={arrowslideone}
                                    alt="Testimonial"
                                    className="arrowslides-one"
                                /></button>
                                    <button id="next"> <img
                                    src={arrowslidetwo}
                                    alt="Testimonial"
                                    className="arrowslides-one"
                                /></button>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5">
                            <div>
                                <img
                                    src={imagetestominal}
                                    alt="Testimonial"
                                    className="image-testimonial floating"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="child-group">
                <div className="container">
                    <img
                        src={childgroup}
                        alt="Child Group"
                        className="child-group-img"
                    />
                </div>
            </section>
        </>
    );
}

export default Testimonial;
