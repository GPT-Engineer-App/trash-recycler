import React, { useState } from 'react';

const TalliesAndSettings: React.FC = () => {
  const [settings, setSettings] = useState({
    brightness: 50,
    quality: 720,
    fps: 30,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setSettings({
      brightness: 50,
      quality: 720,
      fps: 30,
    });
  };

  const handlePushTallies = () => {
    // Placeholder for pushing/updating tallies and moving values to historical tracking data
    console.log('Tallies pushed/updated');
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Tallies & Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-4">Persistent Tallies</h2>
          <p>Week: 100</p>
          <p>Month: 400</p>
          <p>Year-to-Date: 5000</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            onClick={handlePushTallies}
          >
            Push/Update Tallies
          </button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-xl mb-4">Settings</h2>
          <div className="mb-4">
            <label htmlFor="brightness" className="block mb-2">Brightness</label>
            <input
              type="range"
              id="brightness"
              name="brightness"
              min="0"
              max="100"
              value={settings.brightness}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quality" className="block mb-2">Quality</label>
            <input
              type="number"
              id="quality"
              name="quality"
              value={settings.quality}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="fps" className="block mb-2">FPS</label>
            <input
              type="number"
              id="fps"
              name="fps"
              value={settings.fps}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Save Settings</button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default TalliesAndSettings;