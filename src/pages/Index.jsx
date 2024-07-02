import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [mode, setMode] = useState("");

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to ML Object Detection</h1>
      <p className="mb-4">Please select a mode to get started:</p>
      <Select onValueChange={setMode}>
        <SelectTrigger className="w-64 mx-auto mb-4">
          <SelectValue placeholder="Select Mode" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="object-detection">Object Detection</SelectItem>
          <SelectItem value="roi-monitoring">ROI Monitoring</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="primary" disabled={!mode} onClick={() => console.log(`Selected mode: ${mode}`)}>
        Continue
      </Button>
    </div>
  );
};

export default Index;