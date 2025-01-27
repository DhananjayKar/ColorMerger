import React, { useState } from 'react';

const GetColor = ({ color, setColor, label }) => {
  const [tempColor, setTempColor] = useState(color);

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setTempColor(newColor); 
    
    if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(newColor)) {
      setColor(newColor);
    }
  };

  const handleColorPickerChange = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
    setTempColor(newColor);
  };

  return (
    <div className="">
      <label className="block mb-3">{label}:</label>
      <div className="flex justify-center items-center">
      <input
        type="color"
        value={color}
        onChange={handleColorPickerChange}
        className="w-28 h-28 me-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2"
        style={{'--tw-ring-color':color}}
      />

      <textarea
        value={tempColor}
        onChange={handleColorChange}
        rows="2"
        cols="20"
        style={{ resize: 'none', cursor:'pointer' }}
        className="bg-transparent p-3 border-r-gray-100 rounded-3xl font-mono w-6/12 text-center"
      />
      </div>
    </div>
  );
};

export default GetColor;