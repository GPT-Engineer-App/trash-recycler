import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/live-view");
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to ML Object Detection</h1>
      <p className="mb-4">Click the button below to get started:</p>
      <Button variant="primary" onClick={handleContinue}>
        Continue
      </Button>
    </div>
  );
};

export default Index;