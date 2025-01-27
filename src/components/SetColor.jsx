import React, { useState, useEffect } from 'react';
import '../App.css';

const SetColor = ({ ratio, setRatio, mergedColor }) => {
  const [value, setValue] = useState(ratio);
  const [show, setShow] = useState(false);
  const [rgb,setRgb] = useState('');
  
  //changing hex to rgb
  const hexToRgb = (hex) => {
    hex = hex.replace('#', '');
    if (hex.length === 3) {
      hex = hex.split('').map((char) => char + char).join('');
    }
    if (/^[0-9A-Fa-f]{6}$/.test(hex)) {
      const r = parseInt(hex.slice(0, 2), 16);
      const g = parseInt(hex.slice(2, 4), 16);
      const b = parseInt(hex.slice(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    }
    return '255,255,255';
  };
  
  //changing values dynamically
  const rangeSlide = (e) => {
    const changeInVal = e.target.value;
    setValue(parseFloat(changeInVal));
    setRatio(changeInVal);
    setRgb(hexToRgb(mergedColor));
    }
    
    //for showing percentage value
  const rangeValue = (e) => {
    setShow(true)
}

// to change the Effect of the value percentage
useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [show]);
  
  return(
    <div className="container">
        <span className={show ? "rangeValue" : "hide"}>
  {Math.round(value * 100)}%
</span>
        <div className="inner-container">
          <input className="range" type="range" value={value} min="0" max="1" step="0.01" onChange={rangeSlide} onMouseMove={rangeSlide} onInput={rangeValue} style={{background:`linear-gradient(to right, rgba(${rgb},0), rgba(${rgb},1) ${value*100}%, #ddd ${value*100}%)`}}/>
        </div>
    </div>
    )
}

export default SetColor;