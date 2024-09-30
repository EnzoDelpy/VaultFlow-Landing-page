import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import Hero from './components/Hero.tsx'
import TrustedSection from './components/TrustedSection.tsx'
import FeaturesSection from './components/FeaturesSection.tsx'
import SubHero from './components/SubHero.tsx'
import Footer from './components/Footer.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar></Navbar>
    <main className='w-full'>
      <Hero></Hero>
      <TrustedSection></TrustedSection>
      <FeaturesSection></FeaturesSection>
      <SubHero></SubHero>
    </main>
    <Footer></Footer>
  </StrictMode>,
)
