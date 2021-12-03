import React, {useContext} from 'react';
import AppTheme from './Color';
import ThemeContext from './ThemeContext'


const HeroSection =  ()=>{
     const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
                    
                    <div
                      style={{
                        padding: "1rem",
                        backgroundColor: `${currentTheme.backgroundColor}`,
                        color: `${currentTheme.textColor}`,
                        textAlign: "center",
                      }}
                    >
                      <h1>The theme toggler</h1>
                      <p>From NeoSoft front end engineer Mr. Saroj Sundara</p>
                      <button
                        style={{
                          backgroundColor: "#03203C",
                          color: "#FFF",
                          padding: "10px 25px",
                          fontSize: "20px",
                          border: `${currentTheme.border}`,
                        }}
                      >
                        Click here to swich theme
                      </button>
                    </div>
            
      
    );
}

export default HeroSection;
