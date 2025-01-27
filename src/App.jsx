import React, { useState } from 'react';
import GetColor from './components/GetColor';
import SetColor from './components/SetColor';
import ResultColor from './components/ResultColor';
import './index.css';

function App() {
  const [color1, setColor1] = useState('#f2d00c');
  const [color2, setColor2] = useState('#00ffff');
  const [ratio, setRatio] = useState(0.5);
  const [mergedColor, setMergedColor] = useState('#800080');

  return (
    <div className="w-full min-h-screen p-5" style={{backgroundColor:mergedColor}}>
      <div className="flex flex-col justify-center items-center p-6 border-4 rounded-3xl bg-white">
      <h1 className="mb-3 font-serif text-4xl">Color Merger</h1>
      <div className="flex flex-wrap justify-around bg-amber-50 rounded-3xl w-full mt-2 p-3">
        <GetColor color={color2} setColor={setColor2} label="Merge" />
        <GetColor color={color1} setColor={setColor1} label="With" />
      </div>
      <SetColor ratio={ratio} setRatio={setRatio} mergedColor={mergedColor}/>
      <div className="mt-4 w-full">
        <ResultColor color1={color1} color2={color2} ratio={ratio} setMergedColor={setMergedColor}/>
      </div>
      </div>
    </div>
  );
}

export default App;