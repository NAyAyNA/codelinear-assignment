import { useState } from 'react'
import './App.css'
import Landing from "./components/Landing/Landing";
import Solutions from "./components/Solutions/Solutions";
import Service from "./components/Service/Service";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Digital from './components/Digital/Digital';
import Insights from './components/Insights/Insights';
import CaseStudy from './components/CaseStudy/CaseStudy';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
      <Landing />
      <Solutions />
      <Service />
      <Features />
      <Digital />
      <Insights />
      <CaseStudy />
      <Contact />
      <Footer />
    </>
  )
}

export default App
