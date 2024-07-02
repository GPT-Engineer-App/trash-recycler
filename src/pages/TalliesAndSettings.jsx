import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TalliesAndSettings = () => {
  const [settings, setSettings] = useState({
    brightness: 50,
    quality: 720,
    fps: 30,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
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
            <Button variant="outline" className="mt-4">Download Results</Button>
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
                value={settings.brightness}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quality" className="block mb-2">Quality</label>
              <Input
                type="number"
                id="quality"
                name="quality"
                value={settings.quality}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="fps" className="block mb-2">FPS</label>
              <Input
                type="number"
                id="fps"
                name="fps"
                value={settings.fps}
                onChange={handleInputChange}
              />
            </div>
            <Button variant="primary">Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TalliesAndSettings;