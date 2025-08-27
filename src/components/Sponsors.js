import React from "react";
import criz from '../assets/images/criz.png'
import mpl from '../assets/images/mpl.png'
import rush from '../assets/images/rush.png'
import wizo from '../assets/images/wizo.png'

function Sponsors() {
  return (
    <section className="Sponsors">
    <div className="container">
            <h2 className="text-center">Our Sponsors</h2>
            <div class="marquee fast">
        <div className="row sponsors-logo">
            <div className="col-lg-3">
                <div className="text-center first-logo">
                    <img src={criz} alt="" className="sponser-logo-wid" />
                </div>
            </div>
            <div className="col-lg-3">
                <div className="text-center first-logo">
                    <img src={mpl} alt="" className="sponser-logo-wid" />
                </div>
            </div>
            <div className="col-lg-3">
                <div className="text-center first-logo">
                    <img src={rush} alt="" className="sponser-logo-wid" />
                </div>
            </div>
            <div className="col-lg-3">
                <div className="text-center first-logo">
                    <img src={wizo} alt="" className="sponser-logo-wid" />
                </div>
            </div>
        </div>
        </div>
    </div>
</section>

  );
}

export default Sponsors;


 