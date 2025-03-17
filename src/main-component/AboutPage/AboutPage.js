import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import CtaSection from '../../components/CtaSection/CtaSection';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnersSecion from '../../components/PartnersSecion/PartnersSecion';
import Logo from '../../images/logo.svg'
import Cta from '../../components/Cta/Cta';
import PricingSection from '../../components/PricingSection/PricingSection';
const AboutPage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} />
            <PageTitle pageTitle={'About Us'} pagesub={'About'} />
            <About />
            <PricingSection/>
            <Cta />
            {/* <TeamSection /> */}
            <PartnersSecion />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;
