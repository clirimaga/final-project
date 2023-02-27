

    import { useState,useEffect } from "react";
    import './components.css'
// UseState
    function DarkMode() {
        const [theme, setTheme] = useState('light');
        const toggleTheme = () => {
            if (theme === 'light'){
                setTheme('dark')
            }else{
                setTheme('light')
            }
        };
// UseEffect
        useEffect(() => {
            document.body.className = theme;
        }, [theme]);

    return(
        <div>
            <button onClick={toggleTheme}>{theme === 'light' ? 'night/Nacht':'day/Tag'}</button>
        </div>
    );
}

export default DarkMode;