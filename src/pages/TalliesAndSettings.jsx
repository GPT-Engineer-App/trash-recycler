import { useState } from "react";
import { useSettings } from "@/contexts/SettingsContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TalliesAndSettings = () => {
  const { settings, updateSettings } = useSettings();
  const [localSettings, setLocalSettings] = useState(settings);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLocalSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setLocalSettings({
      brightness: 50,
      quality: 720,
      fps: 30,
    });
  };

  const handlePushTallies = () => {
    // Placeholder for pushing/updating tallies and moving values to historical tracking data
    console.log("Tallies pushed/updated");
  };

  const handleSaveSettings = () => {
    updateSettings(localSettings);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Tallies & Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle>Persistent Tallies</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Week: 100</p>
            <p>Month: 400</p>
            <p>Year-to-Date: 5000</p>
            <Button variant="outline" className="mt-4" onClick={handlePushTallies}>Push/Update Tallies</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <label htmlFor="brightness" className="block mb-2">Brightness</label>
              <Input
                type="range"
                id="brightness"
                name="brightness"
                min="0"
                max="100"
                value={localSettings.brightness}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quality" className="block mb-2">Quality</label>
              <Input
                type="number"
                id="quality"
                name="quality"
                value={localSettings.quality}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fps" className="block mb-2">FPS</label>
              <Input
                type="number"
                id="fps"
                name="fps"
                value={localSettings.fps}
                onChange={handleInputChange}
              />
            </div>
            <Button variant="primary" className="mr-2" onClick={handleSaveSettings}>Save Settings</Button>
            <Button variant="secondary" onClick={handleReset}>Reset</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TalliesAndSettings;