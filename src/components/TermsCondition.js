import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function TermsConditionPolicy() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.kidzsport-disclaimer');
      const sectionPosition = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the section is in view
      if (sectionPosition < windowHeight - 100) {
        setIsVisible(true); // Add 'show' class
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <section className={`disclaimer kidzsport-disclaimer ${isVisible ? 'show' : ''}`}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div>
              <h2 className="disclaimer-title text-center mb-4">Terms and Conditions</h2>
            </div>
            <div>
              <p className="interactive mb-4">
                This terms & conditions policy outlines how we collect, use, and protect your personal information. Please read it carefully.
              </p>
            </div>
            <div className="d-flex gap-2 mb-2">
            <p className="Empowering">
              <strong>Registration:</strong>
              <ul>
                  <li>To become a member of <strong>Kidzsport</strong>, children must register and pay the membership fee.
                  </li>
                  <li>Upon registration, members will receive a <strong>voucher coupon worth ₹2000 </strong> (subject to specific terms and conditions).
                  </li>
                  <li>Each sports event has a distinct registration fee, and spots are available on a <strong>first-come, first-served basis.</strong></li>
                  <li>Open to <strong>all kids under 18 years</strong>aiming to promote sportsmanship and healthy competition.
                  </li>
                  <li><strong>"Parent" </strong> refers to a legal guardian responsible for fee payments and contract obligations.
                  </li>
                </ul>
          
              <strong>Membership:</strong> 
             <ul>
              <li><strong>One-time membership fee</strong> : ₹1000/-</li>
              <li>Members enjoy discounts on sports products related to <strong>Kidzsport</strong></li>
              <li>During the inaugural event, members will receive vouchers worth ₹2000/- for use in Kidzbook.in and Kidzsports.world applications.
              </li>
              <li><strong>Upcoming applications associated with Kidzbook.in:</strong>
              </li>
              <ul>
           
           <li><strong>Education</strong> - Library, Educational webinars, seminars, Sponsorships/Scholarships etc.</li>
           <li>
          <strong>Food Delivery Application</strong>  -  
           <a href="https://www.rasoi.delivery" target="_blank" rel="noopener noreferrer">
             www.rasoi.delivery
           </a> 
           (Pure Veg) (for all age groups)
         </li>
           <li><strong>Sports Store</strong> - Kidzsports stores availing all sports equipment.</li>
           <li><strong>Travel Boutique</strong> –Low-cost trips with lower rates than market rates.
         </li>
           <li><strong>Insurance </strong>– Jeevan Insurance (Insurance for kids, like Life Insurance)</li>
           <li>
          <strong>Investment</strong>  – 
           <a href="https://www.myrupee.in" target="_blank" rel="noopener noreferrer">
             www.myrupee.in
           </a> (Empowering financial growth with investment and valuable returns on it for all age groups)
         </li>
         </ul>
              </ul>  
              <strong>Sports Events :</strong> 
              <ul>
                <li><strong>Duration: </strong>Sports events will be held for <strong>8 months </strong>annually, excluding monsoon season.
                </li>
                <li> <strong>Sports Carnival: </strong>A variety of<strong>indoor and outdoor sports </strong>will be featured.</li>
               <li><strong>Competitions:</strong></li> 
                <ul>
                <li>Individual matches between schools, colleges, and states.
                </li>
                <li><strong>State-level contests </strong>across India.
                </li>
                <li>Top-performing kids may receive <strong>sponsorship/funding </strong>based on their credentials.
                </li>
                </ul>
               
                <li><strong>Sports categories include: </strong>Cricket, volleyball, football, carrom, chess, hockey, kabaddi, badminton, table tennis, and more.
                </li>
                <li><strong>All India School Kids Competition </strong>where registered kids will compete with school teams.
                </li>
                </ul>


              <strong>Refund Policy:</strong>
              <ul>
                <li><strong>Refunds are only available :</strong> if the program fails to reach <strong></strong>25% of its target membership.
                </li>
                <li>No refund for amounts deducted due to <strong>GST or service charges .</strong>
                </li>
                <li>No refunds once a service has begun, including <strong>digital services, IT support, or sports-related subscriptions.
                </strong> 
                </li>
                <li><strong> Event Cancellation:</strong>
                  <ul>
                    <li>If a sports event is cancelled, refunds will be processed based on the event's value within the subscription.
                    </li>
                    <li>Refunds will be credited to the <strong>original payment method or as account credit.</strong>
                    </li>

                  </ul>
                </li>          
                  <strong>Refund Eligibility & Exclusions :</strong>
                  <ul>
                    <li><strong>Eligible for refund: </strong> Only if an event is officially cancelled.
                    </li>
                    <li><strong>Not eligible for refund:</strong></li> 
                      <ul>
                        <li >Dissatisfaction with intangible services (e.g., IT support, consultation).
                        </li>
                        <li>Personal reasons like scheduling conflicts or a change of mind.
                        </li>
                      </ul>
                 
                    <li><strong>Timeframe for refund claims:</strong> within <strong>15 days</strong> of the issue occurrence.
                    </li>
                  </ul>
                  <strong>Company Liability</strong>
                  <ul>
                    <li>Limited to specific affected services/events.
                    </li>
                    <li>Not liable for indirect damages (e.g., lost profits, inconvenience).
                    </li>
                  </ul>
                  <strong>Compensation Limits:</strong>
                  <ul>
                    <li>If an event accounts for 10% of the subscription fee, the refund will 
                      <strong>only cover that portion.</strong>
                    </li>
                    <li>No additional claims beyond the <strong></strong>determined refund amount.
                    </li>
                  </ul>


                    <li><strong>Force Majeure :</strong> </li>
                    <li>The company is<strong>not liable for refunds or compensation </strong> in case of natural disasters affecting events.
                    </li>
                    <li>Unavoidable circumstances include:
                    </li>
                    <ul>
                      <li>Extreme weather conditions (rain, hurricanes, floods, etc.).
                      </li>
                      <li>Other unpredictable and unpreventable disasters.
                      </li>
                    </ul>
                  </ul>

                  <strong>Additional Provisions</strong>
                  <ul>
                    <li><strong>Emergency Medical Support:
                    </strong></li>
                    <ul>
                      <li>Events will have <strong>trained emergency personnel</strong>, including doctors, trainers, and ambulances.
                      </li>
                    </ul>
                    <li><strong>Dietary Regulations:</strong></li>
                    <ul>
                      <li>All food and beverages will be <strong>100% vegetarian and Jain-friendly.</strong>
                      </li>
                      <li>Souvenirs, gifts, and vouchers will be <strong>vegan products. </strong></li>
                    </ul>
                  </ul>

                <strong>Termination Policy :</strong> 
                <ul>
                  <li><strong>Immediate termination</strong> if a child is found using toxic substances such as drugs, alcohol, or smoking.
                  </li>
                  <li>Strict actions will be taken against violations, and the <strong>membership will be cancelled immediately.</strong>
                  </li>
                </ul>

                <strong>Event Locations</strong> – 
                <br />
                <strong>Outdoor Games Locations:-</strong> 
                <ul>
                  <li><strong>Maharashtra:</strong> Mumbai, Pune, Nagpur</li>
                  <li><strong>Hyderabad:</strong> Visakhapatnam, Vijayawada, Andhra Pradesh</li>
                  <li><strong>Assam:</strong> Jorhat, Guwahati, Bongaigaon</li>
                  <li><strong>Goa:</strong> Panaji</li>
                  <li><strong>Gujarat:</strong> Ahmedabad, Surat, Vadodara, Rajkot</li>
                  <li><strong>Haryana:</strong> Gurgaon, Faridabad, Bahadurgarh, Dharuhera</li>
                  <li><strong>Himachal Pradesh:</strong> Dharamshala</li>
                  <li><strong>Jharkhand:</strong> Ranchi</li>
                  <li><strong>Karnataka:</strong> Bangalore, Hubli, Mangalore</li>
                  <li><strong>Madhya Pradesh:</strong> Indore, Bhopal</li>
                  <li><strong>Punjab:</strong> Amritsar, Ludhiana, Lahore</li>
                  <li><strong>Tamil Nadu:</strong> Chennai, Coimbatore</li>
                  <li><strong>Uttar Pradesh:</strong> Lucknow, Kanpur</li>
                  <li><strong>West Bengal:</strong> Kolkata</li>
                  <li><strong>Delhi</strong></li>
                </ul>
        
            <strong>Indoor Games Locations:
            </strong>
            <ul>
              <li>Locations will be announced soon.
              </li>
              <li>Expected <strong>3-4 locations per city</strong> , ensuring accessibility for all members</li>
           
            </ul>

            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsConditionPolicy;
