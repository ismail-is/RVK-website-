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
import simg1 from '../../images/allimg/mainbanners/pop/7.jpg'
import simg2 from '../../images/allimg/mainbanners/pop/8.jpg'
import simg3 from '../../images/new/4.png'
import img from '../../images/allimg/banner4.jpg'
import ServiceSidebar from '../ServiceSinglePage/sidebar';
import { Link } from 'react-router-dom';
import PopSections from '../../components/PopSections/PopSections';
const Pop = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} Logo={Logo} />
            <PageTitle pageTitle={'POP GRIPFRAMES  '}  />
            <div className="wpo-service-single-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-item">
                                    <div className="wpo-service-single-main-img">
                                        <img src={img} alt="eimg" />
                                    </div>
                                    <div className="wpo-service-single-title">
                                        <h3>POP Gripframes by RVK Steel & Alloys</h3>
                                    </div>
                                    <p>Sturdy and lightweight POP gripframes designed for seamless ceiling and partition installations. Made from high-quality galvanized steel, ensuring durability and rust resistance. Engineered for easy handling and quick assembly, providing strong support for POP and gypsum boards. Ideal for residential, commercial, and industrial spaces.</p>
                                   
                                    <div className="row mt-4">
                                        <div className="col-md-4 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={simg1} alt="eimg" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={simg2} alt="eimg" />
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={simg3} alt="eimg" />
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
                            <h1  className="form-control"  style={{backgroundColor:'#FFE7DC',padding:'20px',fontWeight:'bold',fontSize:'18px'}}>THICKNESS : 0.5 | 0.6 | 0.8 | 1.0 | 1.2 </h1>
                            {/* <button type="submit"><i className="ti-search"></i></button> */}
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Features </h3>
                    <ul>
                       
                            <li>80/120 GSM Zinc coating</li>
                            <li>Made from grade 1 hot dipped galvanised coll</li>
                            <li>Consistent quality</li>
                            <li>Excellent reliability.</li>
                            <li>Rust resistant shield</li>
                    </ul>
                </div>
                {/* <div className="widget category-widget">
                <h3>Types of Duct</h3>
                    <ul>
                       
                    <li>Galvanised Steel duct</li>
                   <li>Aluminium duct</li>
                   <li>GI Powder Coated Duct</li>
                   <li>Flexible Duct</li>
                   <li>Acoustic installations   </li>
                    </ul>
                </div> */}
              
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
        <PopSections/>


                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default Pop;
