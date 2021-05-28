import About from './Components/About'
import Clients from './Components/Clients'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Mobileheader from './Components/Mobileheader'
//import Portfolio from './Components/Portfolio'
import Skills from './Components/Skills'
import React from 'react'
import Thanks from './Components/Thanks'
function App() {
  return (
    <div className="site-wrapper">
      <Mobileheader />
      <Header />
      <main className="content float-right">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Clients />
      <Contact />
      <Thanks />
      </main>
    </div>
  );
}

export default App;
