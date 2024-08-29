
'use client';

import MainLayout from '../layout/MainLayout'
import Splash from '../components/Splash'
import Myself from '../components/Myself'
import Eyes from '../components/Eyes'
import Weapons from '../components/Weapons'
import Steps from '../components/Steps'
import Bio from '../components/Bio'
import Satisfy from '../components/Satisfy'

import { useEffect, useRef } from 'react';

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
      const handleScroll = (event) => {
          // Get the current scroll position
          const scrollPosition = window.scrollY + window.innerHeight;

          // Find the next section to scroll to
          const nextSection = sectionsRef.current.find(
              (section) => section.offsetTop >= scrollPosition
          );

          // If a section is found and the user is scrolling down, scroll to it
          if (nextSection) {
              event.preventDefault();
              nextSection.scrollIntoView({ behavior: 'smooth' });
          }
      };

      window.addEventListener('scroll', handleScroll, { passive: false });

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <MainLayout>
        <section ref={(el) => sectionsRef.current[0] = el}>
          <Splash/>
        </section>
        <section ref={(el) => sectionsRef.current[1] = el}>
          <Myself/>
        </section>
        <section ref={(el) => sectionsRef.current[2] = el}>
          <Eyes/>
        </section>
        <section ref={(el) => sectionsRef.current[3] = el}>
          <Weapons/>
        </section>
        <section ref={(el) => sectionsRef.current[4] = el}>
          <Steps/>
        </section>
        <section ref={(el) => sectionsRef.current[5] = el}>
          <Bio/>
        </section>
        <section ref={(el) => sectionsRef.current[6] = el}>
          <Satisfy/>
        </section>
        {/* <Myself/>
        <Eyes/>
        <Weapons/>
        <Steps/>
        <Bio/>
        <Satisfy/> */}
      </MainLayout>
    </>
  )
}

export default Home