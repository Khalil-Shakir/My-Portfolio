import './Themes.css'
import { FaCog } from "react-icons/fa";
import { BsMoonFill } from "react-icons/bs";
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

const Theme = () => {
const [showSwitcher, setShowSwitcher] = useState(false)
const [color, setColor] = useState(getStorageColor())

function changeColor(color){
    setColor(color)
}

useEffect(()=>{
    document.documentElement.style.setProperty('--hue',color);
    localStorage.setItem('color', color)
}, [color])

  return (
    <div className={`${showSwitcher ? "show-switcher" : ''} style-switcher`}>
        <div className="switcher-toggler" onClick={()=> setShowSwitcher(!showSwitcher)}>
            <FaCog />
        </div>
        <div className="theme-toggler">
            <BsMoonFill />
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