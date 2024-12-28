import React from 'react';
import Hero from './components/Hero.jsx';
import WavebelHero from './components/wavebelHero.jsx';
import PK from './components/PK.jsx'
import Pramod from './components/pramod.jsx'

const App = () => {
  return (
    <main>
{/* <!-- hero -->
<!-- intropage to show isbm coe --> 
. Include the name of COE in this.*/}
      <Hero />
      <WavebelHero />
      
{/*show all the branches of ISBM and info about coe -->
  <!-- info about coe includes:- 
  . affiliations
  . specialization in branches
  . achievements */}
      
      
{/*  founder introduction */}
      <Pramod />


{/* <!-- principal intro --> */}
      <PK />

{/* <!-- alumni Introduction --> */}

{/* <!-- Contact details --> */}

    </main>
  )
}

export default App