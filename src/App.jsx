import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/about'
import Produit from './components/produit/produit'
import Experience from './components/experience/Experience'
import Portfolio from './components/porfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import Testimonials from './components/tertimonials/Testimonials'


import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ProductDetails from './components/produit/produitDetatille'


const App = () => {
  return (

    <BrowserRouter>
    <nav>
      <Nav    />
    </nav>
    <Routes>
      <Route path="/" element={<Header /> } />
      <Route path="/about" element={<About />} />
      <Route path="/produit" element={<Produit />} />
      <Route path="/produit/:id" element={<ProductDetails />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
/*
    <>
        <Experience></Experience>
        <Services></Services>
        <Portfolio></Portfolio>
        <Testimonials></Testimonials>
        <Contact></Contact>
        <Footer></Footer>
    </>
*/
  )
}

export default App