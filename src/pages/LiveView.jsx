import { useEffect, useRef } from "react";

const LiveView = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((error) => {
          console.error("Error accessing webcam: ", error);
        });
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Live View</h1>
      <div className="relative w-full max-w-4xl">
        <video ref={videoRef} className="w-full h-auto bg-black" autoPlay muted />
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Render bounding boxes and HUD here */}
        </div>
      </div>
    </div>
  );
};

export default LiveView;