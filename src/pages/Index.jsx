import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [mode, setMode] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (mode) {
      navigate(`/${mode}`);
    }
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to ML Object Detection</h1>
      <p className="mb-4">Please select a mode to get started:</p>
      <Select onValueChange={setMode}>
        <SelectTrigger className="w-64 mx-auto mb-4">
          <SelectValue placeholder="Select Mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="live-view">Live View</SelectItem>
          <SelectItem value="tallies-settings">Tallies & Settings</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="primary" disabled={!mode} onClick={handleContinue}>
        Continue
      </Button>
    </div>
  );
};

export default Index;