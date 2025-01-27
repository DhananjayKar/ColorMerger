import React, { useEffect, useState } from 'react';

const ResultColor = ({ color1, color2, ratio, setMergedColor }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const mergeColors = (hex1, hex2, ratio) => {
    const blendHexChannel = (channel1, channel2, ratio) => {
      const blended = Math.round(
        parseInt(channel1, 16) * ratio + parseInt(channel2, 16) * (1 - ratio)
      );
      return blended.toString(16).padStart(2, '0');
    };

    const r = blendHexChannel(hex1.slice(1, 3), hex2.slice(1, 3), ratio);
    const g = blendHexChannel(hex1.slice(3, 5), hex2.slice(3, 5), ratio);
    const b = blendHexChannel(hex1.slice(5, 7), hex2.slice(5, 7), ratio);

    return `#${r}${g}${b}`;
  };

  const mergedColor = mergeColors(color1, color2, ratio);

  useEffect(() => {
    setMergedColor(mergedColor);
  }, [mergedColor, setMergedColor]);

  const handleCopy = () => {
    navigator.clipboard.writeText(mergedColor).then(() => {
      setCopySuccess('Copied!');
      setTimeout(() => setCopySuccess(''), 2000);
    });
  };

  return (
    <div className="flex flex-col items-center mb-2" >
      <h2 className="font-bold">Merged Color: {mergedColor}</h2>
      <div className="w-full flex flex-wrap justify-evenly items-center">
        <div className="rounded-3xl"
          style={{
          backgroundColor: mergedColor,
          width: '70%',
          height: '100px',
          border: '1px solid #000',
          marginTop: '10px',
          }}
        ></div>
        <button className="" onClick={handleCopy} style={{ marginTop: '10px', opacity : 0.7, cursor:'pointer' }}>
          Copy to Clipboard
        </button>
      </div>
      {copySuccess && <p style={{ color: 'green', marginTop: '5px' }}>{copySuccess}</p>}
    </div>
  );
};

export default ResultColor;