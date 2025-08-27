import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function PrivacyPolicy() {
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
              <h2 className="disclaimer-title text-center mb-4">Privacy Policy</h2>
            </div>
            <div>
              <p className="interactive mb-4">
                This privacy policy outlines how we collect, use, and protect your personal information. Please read it carefully.
              </p>
            </div>
            <div className="d-flex gap-2 mb-2">
              <p className="Empowering mb-4">
              The creator of this privacy policy ensures a steady commitment to your privacy with regard to the protection of your invaluable information that you may share across this platform. This privacy policy contains information about the platform. 

                <br /><br />
                To provide you with our uninterrupted use of the platform, we may collect and, in some circumstances, disclose information about you with your permission. To ensure better protection of your privacy, we provide this notice explaining our information collection and disclosure policies, and the choices you make about the way your information is collected and used. 
                <br /><br />
                This privacy policy shall be in compliance with the general data protection regulation (gdpr) in effect from may 25, 2018, and any and all provisions that may read to the contrary shall be deemed to be void and unenforceable as of that date. If you do not agree with the terms and conditions of our privacy policy, including in relation to the manner of collection or use of your information, please do not use or access the site. If you have any questions or concerns regarding this privacy policy, you should contact our customer support desk at “info@kidzsport.World”. Any capitalized words used henceforth shall have the meaning accorded to them under this agreement. Further, all heading used herein are only for the purpose of arranging the various provisions of the agreement in any manner. Neither the user nor the creators of this privacy policy may use the heading to interpret the provisions contained within it in any manner.
              </p>
            </div>

            <h4 style={{ color: "#002D45" }}>Information We Collect</h4> 
            <p className="Empowering mb-4">
              We are committed to respecting your online privacy. We further recognize your need for appropriate protection and management of any personal information you share with us. We may collect the following information:
            </p>
            <ul style={{ color: "#002D45" }}>
              <li>Personal data including but not limited to business entity’s name, nature of business entity, registered office address, contact details (official email and mobile number), constituting document.</li>
              <li>Information collected through permission derived by the platform, such as location access and storage permissions.</li>
              <li>Tracking information such as, but not limited to, the IP address of your device and device ID when connected to the internet. This information may include the URL that you just came from (whether this URL is on the platform or not), which URL you next go to (whether this URL is on the platform or not), your computer or device browser information, and other information associated with your interaction with the platform;</li>
            </ul>


            <h4 style={{ color: "#002D45" }}>Details of Platform Usage for Analytics</h4>
            <p className="Empowering mb-4 ">
              This privacy policy also applies to data we collect from users who are not registered as members of this platform, including, but not limited to, browsing behavior, pages viewed, etc. We also collect and store personal information provided by you from time to time on the platform. We only collect and use such information from you that we consider necessary for achieving a seamless, efficient, and safe experience, customized to your needs including:
            </p>
            <ul style={{ color: "#002D45" }} >
              <li>A. To enable the provision of services opted for by you;</li>
              <li>B. To enable the viewing of content in your interest;</li>
              <li>C. To communicate the necessary account and service-related information from time to time;</li>
              <li>D. To allow you to receive quality customer care services and data collection;</li>
              <li>E. To comply with applicable laws, rules, and regulations;</li>
            </ul>
            <p className="Empowering mb-4">
              Where any service requested by you involves a third party, such information as is reasonably necessary by the firm to carry out your service request may be shared with such third party. We also use your contact information to send you offers and recommendations based on your interests and prior activity, as well as to view the content preferred by you. The firm may also use contact information internally to direct its efforts for service improvement but shall immediately delete all such information upon withdrawal of your consent for the same through the ‘unsubscribe’ button or through an email to be sent to info@kidzsport.World.
            </p>
            <p className="Empowering mb-4">
              To the extent possible, we provide you with the option of not divulging any specific information that you wish for us not to collect, store or use. You may also choose not to use a particular service or feature on the platform and opt-out of any non-essential communications from the platform.
            </p>
            <p className="Empowering mb-4">
              Further, transacting over the internet has inherent risks, which can only be avoided by you following security practices yourself, such as not revealing account/login-related information to any other person and informing our customer care team about any suspicious activity or where your account has/may have been compromised.
            </p>

            <h4 style={{ color: "#002D45" }}>Our Use of Your Information</h4>
            <p className="Empowering mb-4">
              The information provided by you shall be used to provide and improve the service for you and all users:
            </p>
            <ul style={{ color: "#002D45" }}>
              <li>To provide you with services on your request.</li>
              <li>For maintaining an internal record.</li>
              <li>For enhancing the services provided.</li>
              <li>For legal and statutory compliance.</li>
            </ul>

            <p className="Empowering mb-4">
              For more details about the nature of such communications, please refer to our terms of service. Further, your data and sensitive personal data may be collected and stored by us for internal record.
            </p>

            <p className="Empowering mb-4">
              We use your tracking information such as IP addresses, and/or device ID to help identify you and gather broad demographic information to make further services available to you.
            </p>

            <p className="Empowering mb-4">
              We will not sell, license, or trade your personal information. We will not share your personal information with others unless they are acting under our instructions or we are required to do so by law.
            </p>

            <p className="Empowering mb-4">
              Information collected via our server logs includes users' IP addresses and the pages visited; this will be used to manage the web system and troubleshoot problems. We also use third-party analytics, tracking, optimization, and targeting tools to understand how users engage with our platform so that we can improve it and cater personalized content/ads according to their preferences.
            </p>


            <h4 style={{ color: "#002D45" }}>How Information Is Collected</h4>
            <p className="Empowering mb-4">
            We will collect and use your personal information solely to fulfil those purposes specified by us, within the scope of the consent of the individual concerned or as required by law. We will only retain personal information as long as necessary for the fulfilment of those purposes.
            <br /><br />
            We will collect and use your personal information solely to fulfil those purposes specified by us, within the scope of the consent of the individual concerned or as required by law. We will only retain personal information as long as necessary for the fulfilment of those purposes. We will collect personal information by lawful and fair means and with the knowledge and consent of the individual concerned. 
            <br/><br/>
            Personal data should be relevant to the purposes for which it is to be used, and, to the extent necessary for those purposes, should be accurate, complete, and up-to-date.
           </p>

            <h4 style={{ color: "#002D45" }}>External Links on the Platform</h4>
            <p className="Empowering mb-4">
            The platform may include advertisements, hyperlinks to other platforms or resources. We have no control over any other platform or resources or contents available on these other platforms, which are provided by companies or persons other than us. You acknowledge and agree that we are not responsible for the availability of any such external sites or resources, and do not endorse any advertising, services/services or other materials on or available from such platform or resources. You acknowledge and agree that we are not liable for any loss or damage which may be incurred by you as a result of the availability of those external sites or resources, or as a result of any reliance placed by you on the completeness, accuracy or existence of any advertising, services or other materials on, or available from, such platforms. These external third-party platforms and resource providers may have their privacy policies governing the collection, storage, retention and disclosure of your personal information that you may be subject to. We recommend that you enter their platform and review its privacy policy.
            </p>

            <h4  style={{ color: "#002D45" }} >Permissions and Access from the Device</h4>
            <p className="Empowering mb-4">
              The application requires permission to access the following features:
            </p>
            <ul style={{ color: "#002D45" }}>
              <li>Files & media</li>
              <li>Location</li>
              <li>Microphone & camera</li>
              <li>Contact</li>
              <li>Notifications</li>
              <li>SMS reading (to verify OTP)</li>
              <li>Calendar</li>
              <li>Phone</li>
              <li>Pop up window</li>
              <li>Show on the lock screen</li>
            </ul>

            <h4 style={{ color: "#002D45" }}>Cookies</h4>
            <p className="Empowering mb-4">
            A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer if you agree. By continuing to browse the site, you are agreeing to our use of cookies. Cookies contain information that is transferred to your computer’s hard drive. You can set your browser to refuse all or some browser cookies, or to alert you when platforms set or access cookies. If you disable or refuse cookies, please note that some parts of this platform may become inaccessible or not function properly. A list of the type of cookies we use is as follows;

            </p>
            <ul style={{ color: "#002D45" }}>
              <li>Strictly necessary cookies. These are cookies that are required for the operation of our platform. They include, for example, cookies that enable you to log into secure areas of our platform, use a shopping cart or make use of e-billing services.</li>
              <li>Analytical/performance cookies. They allow us to recognize and count the number of visitors and to see how visitors move around our platform when they are using it. This helps us to improve the way our platform works, for example, by ensuring that users are finding what they are looking for easily.
              </li>
              <li>Functionality cookies. These are used to recognize you when you return to our platform. This enables us to personalize our content for you, greet you by name and remember your preferences (for example, your choice of language or region).
              </li>
              <li>Targeting cookies. These cookies record your visit to our platform, the pages you have visited and the links you have followed. We will use this information to make our platform and the advertising displayed on it more relevant to your interests. We may also share this information with third-parties for this purpose.
              </li>
         
            </ul>
            <p className="Empowering mb-4">
              Please note that third-parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies. You can block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our platform.
              </p>

            <h4 style={{ color: "#002D45" }}>Google Analytics</h4>
            <p className="Empowering mb-4">
            We use google analytics to help us to understand how you make use of our content and work out how we can make things better. These cookies follow your progress through us, collecting anonymous data on where you have come from, which pages you visit, and how long you spend on the site. This data is then stored by google to create reports. These cookies do not store your personal data. 
            </p>
            <p className="Empowering mb-4">
            The information generated by the cookie about your use of the platform, including your ip address, may be transmitted to and stored by google on servers in the united states. Google may use this information for the purpose of evaluating your use of the platform, compiling reports on platform activity for us and providing other services relating to platform activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on google's behalf. Google will not associate your ip address with any other data held by google. By using this platform, you consent to the processing of data about you by google in the manner and for the purposes set out above. 
            </p>
            <p className="Empowering mb-4">The google platform contains further information about analytics and a copy of google's privacy policy pages.
            </p>


            <h4 style={{ color: "#002D45" }}>Google AdSense</h4>
            <p className="Empowering mb-4">
            Google adsense is a tool that allows platform publishers to deliver advertisements to site visitors in exchange for revenue calculated on a per-click or per-impression basis. To do this, google uses cookies and tracking technology to deliver ads personalized to a platform user/visitor. In this regard the following terms are specified to the users:
            </p>
            <ul style={{ color: "#002D45" }}>
              <li>Third-party vendors, including google, use cookies to serve ads based on your prior visits to our platform or other platforms.</li>
              <li>Google's use of advertising cookies enables us and our partners to serve advertisements to you based on their visit to our platform and/or other platforms on the internet.
              </li>
              <li>You may opt-out of personalized advertising by visiting ads settings.</li>
              <li>All advertisements of third parties on our platform are for informative purposes only and neither the platform nor the firm guarantees or bears liability for the authenticity of the advertisements.
              </li>
              <li>At no point will the firm permit its competitors to advertise on the platform.
              </li>
              <li>You may visit the links in the advertisements at your own risk or choose to not accept the cookies permitting third parties to display their advertisements.
              </li>
         
            </ul>

            <h4 style={{ color: "#002D45" }}>Your Rights</h4>
            <p className="Empowering mb-4">Unless subject to an exemption, you have the following rights concerning your data: </p>
            <ul style={{ color: "#002D45" }}> 
              <li>The right to request a copy of your data which we hold about you; 
              </li>
              <li>The right to request for any correction to any personal data if it is found to be inaccurate or out of date;
              </li>
              <li>The right to withdraw your consent to the processing at any time;
              </li>
              <li>The right to object to the processing of personal data;</li>
              <li>The right to complain about a supervisory authority. 
              </li>
              <li>The right to obtain information as to whether personal data are transferred to a third country or an international organization.
              </li>
            </ul>
            <p className="Empowering mb-4">Where you hold an account with any of our services, you are entitled to a copy of all personal data which we hold concerning you. You are also entitled to request that we restrict how we use your data in your account when you log in.</p>

            <h4 style={{ color: "#002D45" }}>GDPR Privacy Rights</h4>
            <p className="Empowering mb-4">The general data protection regulation or gdpr gives certain rights to individuals in relation to their personal data. Accordingly, we are happy to offer transparency and access controls to help users take advantage of those rights. As available, except as limited under applicable law, the rights afforded to individuals are:
            </p>
            <ul style={{ color: "#002D45" }}>
              <li>Right of access- the right to be informed of, and request access to, the data we process about you,
              </li>
              <li>Right to rectification – the right to request that we amend or update your data where it is inaccurate or incomplete,
              </li>
              <li>Right to erasure- the right to request that we delete your data.</li>
              <li>Right to restrict – the right to request that we temporarily or permanently stop processing all or some of your personal data,
              </li>
              <li>Right to object – the right to object to us processing your personal data on grounds relating to your particular situation. Along with the right to object to your personal data being processed for direct marketing purposes,
              </li>
              <li>Right to data portability – the right to request a copy of your personal data in electronic format and the right to transmit that personal data for use in another part’s service,
              </li>
              <li>Right not to be subject to automated decision-making, the right to not be subject to a decision based solely on automated decision making, including profiling, where the decision would have a legal effect on you or produce a similarly significant effect.
              </li>
            </ul>

            <h4 style={{ color: "#002D45" }}>Confidentiality</h4>
            <p className="Empowering mb-4">
            You further acknowledge that the platform may contain information that is designated confidential by us and that you shall not disclose such information without our prior written consent. Your information is regarded as confidential and therefore will not be divulged to any third party, unless if legally required to do so to the appropriate authorities. We will not sell, share, or rent your personal information to any third party or use your e-mail address for unsolicited mail. Any emails sent by us will only be in connection with the provision of agreed services, and you retain sole discretion to seek for discontinuation of such communications at any point in time. 
            </p>
            <h4 style={{ color: "#002D45" }}>Other Information Collectors</h4>
            <p className="Empowering mb-4">
              Except as otherwise expressly included in this privacy policy, this document only addresses the use and disclosure of information we collect from you. To the extent that you disclose your information to other parties, whether they are on our platform or other sites throughout the internet, different rules may apply to their use or disclosure of the information you disclose to them. To the extent that we use third-party advertisers, they adhere to their privacy policies. Since we do not control the privacy policies of the third parties, you are subject to ask questions before you disclose your personal information to others.
            </p>

            <h4 style={{ color: "#002D45" }}>Our Disclosure of Your Information</h4>
            <p className="Empowering mb-4">
              We may host surveys for survey creators for our platform who are the owners and users of your survey responses. We do not own or sell your responses. Anything you expressly disclose in your responses will be disclosed to survey creators. Please contact the survey creator directly to better understand how they might share your survey responses.
            </p>
            <p className="Empowering mb-4">
              Information collected will not be considered as sensitive if it is freely available and accessible in the public domain or is furnished under the right to information act, 2005, any rules made thereunder or any other law for the time being in force.
            </p>
            <p className="Empowering mb-4">
              Due to the existing regulatory environment, we cannot ensure that all of your private communications and other personally identifiable information will never be disclosed in ways not otherwise described in this privacy policy. By way of example (without limiting and foregoing), we may be forced to disclose information to the government, law enforcement agencies, or third parties. Therefore, although we use industry-standard practices to protect your privacy, we do not promise, and you should not expect, that your personally identifiable information or private communications would always remain private. We do, however, assure you that any disclosure of your personally identifiable information shall be personally intimated to you through an email sent to your provided email address.
            </p>
            <p className="Empowering mb-4">
              As a matter of policy, we do not sell or rent any personally identifiable information about you to any third party. However, the following describes some of the ways that your personally identifiable information may be disclosed:
            </p>
            <ul style={{ color: "#002D45" }}>
              <li>A. <strong>External service providers:</strong> There may be several services offered by external service providers that help you use our platform. If you choose to use these optional services, and in the course of doing so, disclose information to the external service providers, and/or permit them to collect information about you, then their use of your information is governed by their privacy policy.</li>
              <li>B. <strong>Law and order:</strong> We cooperate with law enforcement inquiries, as well as other third parties to enforce laws, such as intellectual property rights, fraud, and other rights. We can (and you authorize us to) disclose any information about you to law enforcement and other government officials as we, in our sole discretion, believe necessary or appropriate, in connection with an investigation of fraud, intellectual property infringements, or other activity that is illegal or may expose us or you to legal liability.</li>
            </ul>

            <h4 style={{ color: "#002D45" }}>Accessing, Reviewing, and Changing Your Profile</h4>
            <p className="Empowering mb-4">
              You can review and change the information you submitted except for your email address. An option for facilitating such change shall be present on the platform and such change shall be facilitated by the user. If you change any information, we may or may not keep track of your old information. We will not retain in our files information you have requested to remove for certain circumstances, such as to resolve disputes, troubleshoot problems, and enforce our terms and conditions. Such prior information shall be completely removed from our databases, including stored ‘backup’ systems. If you believe that any information we are holding on to is incorrect or incomplete, or to remove your profile so that others cannot view it, the user needs to remediate and promptly correct any such incorrect information.
            </p>

            <h4 style={{ color: "#002D45" }}>Security</h4>
            <p className="Empowering mb-4">
            We treat data as an asset that must be protected against loss and unauthorized access. We employ many different security techniques to protect such data from unauthorized access by members inside and outside the firm. We follow generally accepted industry standards to protect the personal information submitted to us and information that we have accessed.
            </p>
            <p className="Empowering mb-4">
              However, as effective as encryption technology is, no security system is impenetrable. Our firm cannot guarantee the security of our database, nor can we guarantee that information you provide won’t be intercepted while being transmitted to the firm over the internet.
            </p>

            <h4 style={{ color: "#002D45" }}>Severability</h4>
            <p className="Empowering mb-4">
              Each paragraph of this privacy policy shall be and remain separate from and independent of and severable from all and any other paragraphs herein except where otherwise expressly indicated or indicated by the context of the agreement. The decision or declaration that one or more of the paragraphs are null and void shall not affect the remaining paragraphs of this privacy policy.
            </p>

            <h4 style={{ color: "#002D45" }}>Amendment</h4>
            <p className="Empowering mb-4">
              Our privacy policy may change from time to time. The most current version of the policy will govern our use of your information and will always be on the platform. Any amendments to this policy shall be deemed as accepted by the user on their continued use of the platform.
            </p>

            <h4 style={{ color: "#002D45" }}>Consent Withdrawal, Data Download & Data Removal Requests</h4>
            <p className="Empowering mb-4">
              To withdraw your consent, or to request the download or delete your data with us for any or all our services at any time, please contact us at <a href="mailto:info@kidzsport.World">info@kidzsport.World</a>.
            </p>


          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicy;
