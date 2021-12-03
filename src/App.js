import React, {useState} from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ThemeContext from './ThemeContext';

const App = ()=>{
  const ThemeHook = useState("light");
  return (
    <ThemeContext.Provider value={ThemeHook}>
      <Header />
      <HeroSection />
    </ThemeContext.Provider>
  )
}

export default App;