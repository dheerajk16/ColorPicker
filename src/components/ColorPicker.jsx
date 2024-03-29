import { useState, useEffect } from 'react';
import chroma from 'chroma-js';
import PropTypes from 'prop-types';

function ColorPicker({
    primaryColors = ['red', 'blue', 'yellow'],
    secondaryColors = ['green', 'orange', 'purple'],
    selectedColor,
    handleSelectedColor,
    placement,
}) {
  const positionObj = { left: 'unset', top: 'unset', right: 'unset', bottom: 'unset'};
  const [position, setPosition] = useState(positionObj);
  const [isVisible, setIsVisible] = useState(false);
  const [primaryShades, setPrimaryShades] = useState([]);
  const [secondaryShades, setSecondaryShades] = useState([]);

  useEffect(() => {
    const positionObj = { left: 'unset', top: 'unset', right: 'unset', bottom: 'unset'};
    if (placement === 'top') setPosition({ ...positionObj, top: '-324px'});
    if (placement === 'bottom') setPosition({ ...positionObj, bottom: '-324px' });
    if (placement === 'left') setPosition({ ...positionObj, left: '-304px', top: '-152px' });
    if (placement === 'right') setPosition({ ...positionObj, right: '-304px', top: '-152px' });
  }, [placement])

  useEffect(() => {
    setPrimaryShades(primaryColors.map(data => {
        return {
            color: data,
            shades: Array.from({ length: 5 }, (_, i) => chroma(data).darken(i).hex())
        }
    }));
    setSecondaryShades(secondaryColors.map(data => {
        return {
            color: data,
            shades: Array.from({ length: 5 }, (_, i) => chroma(data).darken(i).hex())
        }
    }));
  }, [])
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event) => {
    const classNames = ['color-circle', 'color-picker', 'shades', 'picker-content', 'color-picker__color', 'color-picker__controls'];
    if(!event.target.className || classNames.includes(event.target.className) || event.target.className.startsWith('#')) return;
    setIsVisible(false);
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
 
  return (
    <>
        <div className="picker-container">
            <button className="color-picker" onClick={toggleVisibility} aria-haspopup="true" aria-expanded={isVisible}>
                <div className="color-picker__color" style={{ backgroundColor: selectedColor }}></div>
                <div className="color-picker__controls" style={{ color: selectedColor }}>Select Color {selectedColor}</div>
            </button>
            {isVisible && (
                <div className="picker-content" style={position} role="menu">
                <p>Primary Color</p>
                {primaryShades.map((item, index) => (
                    <div className="shades" key={index}>
                        {item.shades.map((shade) => (<button 
                        className={`${shade} color-circle`} 
                        key={shade} 
                        style={{ backgroundColor: shade}} 
                        onClick={() => handleSelectedColor(shade)} 
                        aria-label={`Select ${shade}`}
                        tabIndex={0}></button>))}
                    </div>
                ))}
                <hr></hr>
                <p>Secondary Color</p>
                {secondaryShades.map((item, index) => (
                    <div className="shades" key={index}>
                        {item.shades.map((shade) => (<button 
                        className={`${shade} color-circle`} 
                        key={shade} 
                        style={{ backgroundColor: shade}} 
                        onClick={() => handleSelectedColor(shade)} 
                        aria-label={`Select ${shade}`}
                        tabIndex={0}></button>))}
                    </div>
                ))}
                </div>
            )}
        </div>
    </>
  )
}

ColorPicker.propTypes = {
    primaryColors: PropTypes.array,
    secondaryColors: PropTypes.array,
    selectedColor: PropTypes.string.isRequired,
    handleSelectedColor: PropTypes.func.isRequired,
    placement: PropTypes.string.isRequired,
};
export default ColorPicker
