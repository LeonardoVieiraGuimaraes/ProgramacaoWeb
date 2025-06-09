import React, { useState } from 'react';
import ThemedButton from './ThemedButton'

export default function UseContextComponent() {

    const [themes, setThemes] = useState({
        light: true, 
        foreground:'#000000', 
        background:"#eeeeee"
    })

    const ThemeContext = React.createContext(null)

    const updateTheme= () => {
        if (themes.light) {
            setThemes({
                light: false, foreground:'#ffffff', background:"#222222"
            })
        }
        else {
            setThemes({light: true, foreground:'#000000', background:"#eeeeee"})
        }
    }

    return (
        <ThemeContext.Provider value={themes} >
            <ThemedButton themeContext={ThemeContext}/>
            <button onClick={updateTheme}>Update Theme</button>
        </ThemeContext.Provider>
        
    )

}