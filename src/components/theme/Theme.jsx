import './Themes.css'
import { FaCog } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import {themes} from '../../Database';
import ThemeItem from './themeItem';
import { useEffect, useState } from 'react';


function getStorageColor(){
    let color = '4';
    if(localStorage.getItem('color')){
        color = localStorage.getItem('color')
    }
    return color;
}

function getStorageTheme(){
    let theme = '4';
    if(localStorage.getItem('theme')){
        theme = localStorage.getItem('theme')
    }
    return theme;
}

const Theme = () => {
const [showSwitcher, setShowSwitcher] = useState(false)
const [color, setColor] = useState(getStorageColor())
const [theme, setTheme] = useState(getStorageTheme())

function changeColor(color){
    setColor(color)
}

function toggleTheme(){
    if(theme === 'light-theme'){
        setTheme('dark-theme');
    }else{
        setTheme('light-theme')
    }
}

useEffect(()=>{
    document.documentElement.style.setProperty('--hue',color);
    localStorage.setItem('color', color)
}, [color])

useEffect(()=>{
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme)
}, [theme])

  return (
    <div className={`${showSwitcher ? "show-switcher" : ''} style-switcher`}>
        <div className="switcher-toggler" onClick={()=> setShowSwitcher(!showSwitcher)}>
            <FaCog />
        </div>
        <div className="theme-toggler" onClick={toggleTheme}>
            {theme==='light-theme' ? <BsMoonFill /> : <BsSunFill />}
        </div>

        <h3 className="switcher-title">Style Switcher</h3>
        <div className="switcher-items grid">
            {themes.map((theme, index)=>{
                return <ThemeItem key={index} {...theme} changeColor={changeColor}/>
            })}
        </div>

        <div className="switcher-close" onClick={()=> setShowSwitcher(!showSwitcher)}>&times;</div>
    </div>
  )
}
export default Theme;