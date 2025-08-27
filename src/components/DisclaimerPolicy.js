import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function DisclaimerPolicy() {
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
              <h2 className="disclaimer-title text-center mb-4">DISCLAIMER POLICY</h2>
            </div>
            <div>
              <p className="interactive mb-4">
                This disclaimer policy outlines the limitations of liability and the terms of use for our services. Please read it carefully.
              </p>
            </div>
            <div className="d-flex gap-2 mb-2">
              <p className="Empowering">
                We try to keep the website (hereinafter referred to as “platform”) up and running and free of annoyances. But we make no promises that we will succeed.
                <br /><br />
                Here's a refined version of your point for use in a professional disclaimer:
                <br /><br />
                The company is provided “as is” and “as available” basis and to the extent permitted by law without warranties of any kind, either express or implied, including, but not limited to, implied warranties for a particular purpose, title, and non-infringement. In addition, while the company attempts to provide a good user experience, we do not represent or warrant that:
                <br />
                 (a) the platform will always be secure, and error-free, 
                 <br />(b) the platform will always function without delays, disruptions, or imperfections; 
                 <br />
                 (c) that any content, user content, or information you obtain on or through the platform will be timely or accurate.
                <br /><br />
                You understand and agree that you may be exposed to content that might be offensive, illegal, misleading, or otherwise inappropriate, none of which the company will be responsible for.
                <br /><br />
                The company will not be responsible for any damage suffered by users from the use of the platform provided on the services available on the platform or the content on this platform. This includes but is not limited to loss of revenue/data resulting from delays, as may occur because of any act/omission of parties. This disclaimer of liability also applies to any damages or injury caused by any failure of performance, error, omission, interruption, deletion, defects, delays in operation or transmission, computer viruses, communication line failure, theft or destruction or unauthorized access to, alteration of, or use of records, whether for breach of contract, tortious behavior, negligence, or under any other cause of action.
                <br /><br />
                The company also makes it clear that it shall not be held liable for any damage/hurt/inconvenience caused to the user through the course of usage of the platform and/or content or as a result of the users’ actions. The company makes no representations or warranties as to the conduct of the users.
                <br /><br />
                The content on the platform are intended to be subject to availability, without any promises or guarantees on the same by the company or by the platform, and while certain information available on the platform is the property of the company and the company endeavors to keep the said information updated and accurate, the company shall not make representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the platform or the information, or related graphics contained on the platform for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
                <br /><br />
                The company bears no responsibility whatsoever for any consequences arising from the use of the platform by users. The use of the platform is the sole responsibility of the user (or legally authorized person on behalf of the user), and in case of any negligence on the part of the user in acting on the same shall not be construed as imposing any liability, direct or indirect, on the company/platform.
                <br /><br />
                The company shall disclaim all responsibility and owns no liability to users for any outcome (incidental, direct, indirect, or otherwise) from the use of the platform. In no event will the company be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of the platform.
                <br /><br />
                Through this platform, you are able to link to other platforms that are not under the control of the company. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them. Every effort is made to keep the platform up and running smoothly. However, the company takes no responsibility for, and will not be liable for, the platform being temporarily unavailable due to technical issues beyond our control.
                <br /><br />
                To the maximum extent permitted by applicable law, the company will have no liability related to user content arising under intellectual property rights, libel, privacy, publicity, obscenity, or other laws. The platform also disclaims all liability with respect to the misuse, loss, modification, or unavailability of any user content.
                <br /><br />
                The user understands and agrees that any material or data downloaded or otherwise obtained through the platform are done entirely at his/her own discretion and risk, and he/she will be solely responsible for any damage to his/her computer systems or loss of data that results from the download of such material or data.
              </p>
            </div>
        
          </div>
        </div>
      </div>
    </section>
  );
}

export default DisclaimerPolicy;
