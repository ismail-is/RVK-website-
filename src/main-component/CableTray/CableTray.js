import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnersSecion from '../../components/PartnersSecion/PartnersSecion';
import Logo from '../../images/allimg/logo/RVKlogo.png'
import Cta from '../../components/Cta/Cta';
import simg1 from '../../images/allimg/Ducts/CABLE1.jpg'
import simg2 from '../../images/allimg/Ducts/CABLE2.jpg'
import simg3 from '../../images/new/2.png'
import simg4 from  '../../images/new/3.png'
import Img1 from '../../images/allimg/mainbanners/pop/pop3.jpg'
import ServiceSidebar from '../ServiceSinglePage/sidebar';
import { Link } from 'react-router-dom';
import Contact from '../ServiceSinglePage/contact';
import CableSections from '../../components/CableSections/CableSections';
const CableTray = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'CABLE TRAY  '}  />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={Img1} alt="eimg" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>Cable Tray by RVK Steel & Alloys</h3>
                                    </div>
                                    <p>Durable and corrosion-resistant cable trays for efficient wiring management. Available in perforated, ladder, and solid designs, ensuring easy installation and long-lasting performance. Custom sizes and finishes available to meet industrial standards. Ideal for electrical, data, and telecom applications.</p>
                                   
                                    <div className="row mt-4">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={simg1} alt="eimg" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={simg2} alt="eimg" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={simg3} alt="eimg" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={simg4} alt="eimg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Capabilities</h3>
                                    </div>
                                    <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id
                                        risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis
                                        sollicitudin diam.</p>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                        <li>Elit curabitur amet risus bibendum.</li>
                                    </ul>
                                </div> */}
                                {/* <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Our approach</h3>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean
                                        tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                                        eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit
                                        elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae
                                        id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem
                                        adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce
                                        vulputate diam interdum morbi ac a.</p>
                                </div> */}
                                {/* <div className="wpo-service-single-item list-widget">
                                    <div className="wpo-service-single-title">
                                        <h3>Our Work Process</h3>
                                    </div>
                                    <ul>
                                        <li>Non saed velit dictum quam risus pharetra esta.</li>
                                        <li>Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</li>
                                        <li>Hac nibh fermentum nisi, platea condimentum cursus.</li>
                                        <li>Massa volutpat odio facilisis purus sit elementum.</li>
                                    </ul>
                                </div> */}
                                {/* <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-title">
                                        <h3>Related Service</h3>
                                    </div>
                                    <div className="wpo-service-area">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="wpo-service-item">
                                                    <i className="fi flaticon-construction-and-tools"></i>
                                                    <h2>Civil Engineering </h2>
                                                    <p>Lacus, etiam sed est eu tempus need Temer diam congue laoret .</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="wpo-service-item">
                                                    <i className="fi flaticon-edit"></i>
                                                    <h2>business analysis</h2>
                                                    <p>Lacus, etiam sed est eu tempus need Temer diam congue laoret .</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6 col-12">
                                                <div className="wpo-service-item">
                                                    <i className="fi flaticon-automation"></i>
                                                    <h2>Gas & Oil</h2>
                                                    <p>Lacus, etiam sed est eu tempus need Temer diam congue laoret .</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-contact-area">
                                        <div className="wpo-contact-title">
                                            <h2>Have project in mind? Let's discuss</h2>
                                            <p>Get in touch with us to see how we can help you with your project</p>
                                        </div>
                                       
                                    </div>
                                </div> */}
                            </div>
                        </div>
                       




                        <div className="col-lg-4 col-md-8">
            <div className="blog-sidebar">
                <div className="widget search-widget">
                    <form >
                        <div>
                            <h1  className="form-control"  style={{backgroundColor:'#FFE7DC',padding:'20px',fontWeight:'bold',fontSize:'18px'}}>THICKNESS : 0.6 | 0.8 | 1.0 | 1.2 | 1.5 |2.0 </h1>
                            {/* <button type="submit"><i className="ti-search"></i></button> */}
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Features </h3>
                    <ul>
                       
                            <li>80/120 GSM Zinc Coating</li>
                            <li>Made from grado 1 hot dipped galvanized call</li>
                            <li>Excellent reliability</li>
                            <li>Best resistant shield</li>
                            <li>High quality muti color powder coating available</li>
                    </ul>
                </div>
                <div className="widget category-widget">
                <h3>Types of Duct</h3>
                    <ul>
                       
                    <li>Electrical tray</li>
                   <li>Ceiling tray</li>
                   <li>Ladder Tray</li>
                   
                    </ul>
                </div>
              
                <div className="widget wpo-instagram-widget">
                    <div className="widget-title">
                        {/* <h3>Instagram</h3> */}
                    </div>
                    {/* <ul className="d-flex">
                        <li><img src={ins1} alt="instragram" /></li>
                        <li><img src={ins2} alt="instragram" /></li>
                        <li><img src={ins3} alt="instragram" /></li>
                        <li><img src={ins4} alt="instragram" /></li>
                        <li><img src={ins5} alt="instragram" /></li>
                        <li><img src={ins6} alt="instragram" /></li>
                    </ul> */}
                </div>
            </div>
        </div>
        {/* <div className="wpo-project-single-item">
  <div className="wpo-project-single-title">
    <h3>Related Projects</h3>
  </div>
  <div className="wpo-project-area-s2 single">
    <div className="wpo-project-wrap">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="grid">
          <div className="images">
            <img
              src="https://bunso-react.wpolive.com/static/media/1.5d6fc6b5442efcfa7bd2.jpg"
              alt="img"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="text text-center p-4">
            <span className="block text-gray-500">test</span>
            <h2 className="text-lg font-semibold">test</h2>
            <Link to={`/project-single/`} className="theme-btn mt-2 inline-block">
              <i className="ti-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}



<CableSections/>

                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CableTray;
