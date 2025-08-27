import React from 'react';
import About from "./About";
import Register from "./Register";
import fancyicon from '../assets/images/fancyicon.png'
import linethree from '../assets/images/linethree.png'
import volumone from '../assets/images/volumone.png'
import trophystar from '../assets/images/trophystar.png'
import galleryimg from '../assets/images/galleryimg.png'
import smileabout from '../assets/images/smileabout.png'
import twoboys from '../assets/images/twoboys.png'
import circleiconframe from '../assets/images/circleiconframe.png';
import madam from '../assets/images/madam.png';
import sirimg from '../assets/images/sirimg.png';
import twolines from '../assets/images/twolines.png'


function Aboutus() {
    return (
<>
<section className="about-us-section">
    <div className='bacground-purple'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-4'>
                    <img src={fancyicon} alt="" className="fancy-icons floating" />
                </div>
                <div className='col-lg-4'>
                    <h1 className='heading-main text-center'>About Us</h1>
                    <ul className="breadcrumb justify-content-center text-white align-items-center gap-1">
                        <a href="/" className="nav-link"><li>Home | </li></a>
                        <a href="/" className="nav-link" style={{ color: "#ffb06c" }}><li>About Us</li></a>
                    </ul>
                </div>
                <div className='col-lg-4'>
                    <img src={linethree} alt="" className="fancy-iconss floating" />
                </div>
            </div>
        </div>
    </div>
    <About />
    <style>
        {`.Know { display: none; }`}
    </style>
</section>


        <div className="container bg-background-gradient">
  <div className="row text-center">
    <div className="col-lg-3">
      <div>
        <img src={volumone} alt="Volum One" className="volum" />
      </div>
      <div>
        <p className="sound">2+</p>
      </div>
      <div>
        <p className="Staff">Staff-Camper</p>
      </div>
    </div>
    <div className="col-lg-3">
      <div>
        <img src={trophystar} alt="Trophy Star" className="volum" />
      </div>
      <div>
        <p className="sound">08+</p>
      </div>
      <div>
        <p className="Staff">Programs Designed</p>
      </div>
    </div>
    <div className="col-lg-3">
      <div>
        <img src={galleryimg} alt="Gallery Image" className="volum" />
      </div>
      <div>
        <p className="sound">13+</p>
      </div>
      <div>
        <p className="Staff">Programs Designed</p>
      </div>
    </div>
    <div className="col-lg-3">
      <div>
        <img src={smileabout} alt="Smile" className="volum" />
      </div>
      <div>
        <p className="sound">100%</p>
      </div>
      <div>
        <p className="Staff">Our Commitment</p>
      </div>
    </div>
  </div>
</div>
<section className="new-genration">
    <div className="container bg-color-gradient">
        <div className="row">
            <div className="col-lg-6">
            <div className='circle-framee'>
              <img src={circleiconframe} alt='' className='circle-frame floating'/>
            </div>
            <div>
              <p className="about">VISION AND VALUE</p>
            </div>
            <div>
              <h2 className="Engaging">Empowering the Next Generation</h2>
            </div>
                <div className="background-border color mb-4">
                    <div className="d-flex gap-3">
                        <h5 className="number">01</h5>
                        <div>
                            <h5 className="health">Health and Wellness</h5>
                            <p className="vision-pg">Lorem ipsum dol amet consectetur adipiscing elit Ut et mass Aliquam
                                in hendrerit urnan.</p>
                        </div>
                    </div>
                </div>
                <div className="background-border mb-4">
                    <div className="d-flex gap-3">
                        <h5 className="number">02</h5>
                        <div>
                            <h5 className="health">Fun and Engagement</h5>
                            <p className="vision-pg">Lorem ipsum dol amet consectetur adipiscing elit Ut et mass Aliquam
                                in hendrerit urnan.</p>
                        </div>
                    </div>
                </div>
                <div className="background-border">
                    <div className="d-flex gap-3">
                        <h5 className="number">03</h5>
                        <div>
                            <h5 className="health">Continuous Learning</h5>
                            <p className="vision-pg">Lorem ipsum dol amet consectetur adipiscing elit Ut et mass Aliquam
                                in hendrerit urnan.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div>
                <img src={twoboys} alt="Smile" className="boys-together" />
                </div>
                <div className='circle-framee'>
              <img src={circleiconframe} alt='' className='circle-frame circle-frame-us floating'/>
            </div>
            </div>
        </div>
    </div>
</section>

<section className="team">
<p className="text-center Our-programs-color">Our programs</p>
    <div className='two-lines-img'>
    <img src={twolines} alt="" className="two-lines-img-one" />
    </div>
    <h2 className="text-center">
    Meet Our Dedicated Team
    </h2>
    <div className="container">
        <div className="row text-center">
            <div className="col-lg-4">
                <div class="worker-image-border"> 
                <img src={sirimg} alt="" className="worker" />
                </div>
                <h5 className="John">John Doe</h5>
                <p className="pt">PT Teacher</p>
            </div>
            <div className="col-lg-4">
                <div class="worker-image-border">
                <img src={madam} alt="" className="worker" />
                </div>
                <h5 className="John">John Doe</h5>
                <p className="pt">PT Teacher</p>
            </div>
            <div className="col-lg-4">
                <div class="worker-image-border"> 
                <img src={sirimg} alt="" className="worker" />
                </div>
                <h5 className="John">John Doe</h5>
                <p className="pt">PT Teacher</p>
            </div>
        </div>
    </div>
</section>
{/* <Register /> */}

        </>

    );
}

export default Aboutus;
