import React from 'react';
import callcircleicon from '../assets/images/callcircleicon.png'
import mailcircleicon from '../assets/images/mailcircleicon.png'
import loactioncircleicon from '../assets/images/loactioncircleicon.png'
import shadowimg from '../assets/images/shadowimg.png'

function Register() {
  return (
    <>
    <section className="register-form">
     <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
        <div><p class="about">Registration Now!</p></div>
        <div><h2 class="Engaging Engaging-one">Register for Our 
        Kidzsports World Today!</h2></div>
        <p class="interactive">interactive sports lessons and events, our company promotes healthy habits and teamwork. Join us on social media for tips, challenges, and exciting giveaways!</p>
        <div className='row register-form-fill'>
            <div className='col-lg-6'>
                <div className='d-flex gap-3 align-items-center mb-4 gap-mobile-view-form'>
                    <div><img src={callcircleicon} alt="" className="contact-info-icon" /></div>
                    <div>
                        <p className='mini-info'>Call Us Now</p>
                        <p className='info-inquiry'>+91-9988775566</p>
                    </div>
                </div>
                <div className='d-flex gap-3 align-items-center mb-4 gap-mobile-view-form'>
                    <div><img src={mailcircleicon} alt="" className="contact-info-icon" /></div>
                    <div>
                        <p className='mini-info pp-color'>Call Us Now</p>
                        <p className='info-inquiry'>+91-9988775566</p>
                    </div>
                </div>
                <div className='d-flex gap-3 align-items-center  gap-mobile-view-form'>
                    <div><img src={loactioncircleicon} alt="" className="contact-info-icon" /></div>
                    <div>
                        <p className='mini-info gr-color'>Call Us Now</p>
                        <p className='info-inquiry'>+91-9988775566</p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
            <img src={shadowimg} alt="" className="shadow-img" />
            </div>
        </div>

        </div>
        <div className='col-lg-6'>
            <div className='box-form'>
               <div><h2 class="Engaging Engaging-one mb-4">Registeration</h2></div>
                <form>
                    <div className='row'>
                        <div className='col-lg-6'>
                        <label for="name" class="form-label">Child's Full Name</label>
                        <input type="name" class="form-control" id="name"  name="name" required/>
                        </div>
                        <div className='col-lg-6'>
                        <label for="name" class="form-label">Guardian Name</label>
                        <input type="name" class="form-control" id="name"  name="name" required/>
                        </div>
                        <div className='col-lg-6'>
                        <label for="email" class="form-label mt-3">Email Address</label>
                        <input type="email" class="form-control" id="email"  name="name" required/>
                        </div>
                        <div className='col-lg-6'>
                        <label for="phone" class="form-label mt-3">Phone Number</label>
                        <input type="number" class="form-control" id="phone"  name="name" required/>
                        </div>
                        <div className='col-lg-6'>
                        <label for="sel1" class="form-label mt-3">Child's Age</label>
                         <select class="form-select" id="sel1" name="sellist1" >
                           <option>10 - 12</option>
                           <option>12 - 14</option>
                           <option>14 - 16</option> 
                         </select>
                        </div>
                        <div className='col-lg-6'>
                        <label for="sel1" class="form-label mt-3">Medical Conditions/Allergies No</label>
                         <select class="form-select" id="sel1" name="sellist1">
                           <option>No</option>
                           <option>Yes</option>
                         </select>
                        </div>
                        <div className='col-lg-12'>
                        <label for="comment" className='mt-3 mb-2'>Additional Message</label>
                        <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
                        </div>
                        <button type="submit" class="know more1 mt-3 submit-btn">Submit Now</button>
                    </div>
                </form>
            </div>
        </div>
     </div>
     </div>
    </section>
</>
  );
}

export default Register;
