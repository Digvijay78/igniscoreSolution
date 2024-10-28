import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// images
import doubleQoute from "../../assets/double-quote.svg";

// fonts
import "../../fonts/fonts.css";

// components
import Page from "../Page/Page";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Logos from "../Logos/Logos";
import Testimonial from "../Testimonial/Testimonial";
import Features from "../Features/Features";
import Video from "../Video/Video";
import Pricing from "../Pricing/Pricing";
import FAQ from "../FAQ/FAQ";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
import Accordion from "../Accordion/Accordion";
import Navigation from "../Navigation/Navigation";

const HomePage = () => {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      <Logos />
      <Testimonial>
        <h5 className="h5 testimonial__heading">
          The real-time synchronization and AI-powered organization have made
          our workflow more efficient than ever.
        </h5>
        <div className="testimonial__author-section">
          <p className="text-reg testimonial__author">Vikash Tiwari</p>
          <p className="text-reg testimonial__organization">
            IGNISCORE SOLUTION
          </p>
        </div>
        <img className="testimonial__quotes" src={doubleQoute} alt="quote" />
      </Testimonial>
      {/* <Features /> */}
      <Video />
      <Pricing />
      <FAQ>
        <Accordion />
      </FAQ>
      <CTA />
      <Footer />
    </Page>
  );
};

const FeaturesPage = () => {
  return (
    <Page>
      <Header>
        <Navigation />
      </Header>
      <Features />
      <Footer />
    </Page>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Root Route - HomePage */}
        <Route path="/" element={<HomePage />} />
        
        {/* Features Route */}
        <Route path="/features" element={<FeaturesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
