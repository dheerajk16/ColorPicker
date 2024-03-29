import { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css'

function App() {
  const [placement, setPlacement] = useState('top');
  const [selectedColor, setSelectedColor] = useState('');

  const handlePosition = (event) => {
    setPlacement(event.target.value)
  }

  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  }

  return (
    <>
    <div className="App">
        <h1 id="app-title">Color Picker</h1>
        <label htmlFor="color">Position:</label>
        <select id="color" onChange={handlePosition}>
          <option value="top">top</option>
          <option value="bottom">bottom</option>
          <option value="left">left</option>
          <option value="right">right</option>
        </select>
        <div className="picker-wrapper">
            <ColorPicker
              selectedColor={selectedColor}
              handleSelectedColor={handleSelectedColor}
              placement={placement}
            />
        </div>
    </div>
    </>
  )
}

export default App
