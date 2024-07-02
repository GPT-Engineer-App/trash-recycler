import { useEffect, useRef, useState } from "react";
import SimplePeer from "simple-peer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const LiveView = () => {
  const videoRef = useRef(null);
  const [error, setError] = useState(null);
  const [peer, setPeer] = useState(null);

  useEffect(() => {
    if (videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" }, audio: true })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          const newPeer = new SimplePeer({
            initiator: window.location.hash === '#init',
            trickle: false,
            stream: stream,
          });

          newPeer.on('signal', data => {
            // Send signal data to the server or peer
            console.log('SIGNAL', JSON.stringify(data));
          });

          newPeer.on('stream', stream => {
            // Got remote video stream, now let's show it in a video tag
            const remoteVideo = document.createElement('video');
            document.body.appendChild(remoteVideo);
            remoteVideo.srcObject = stream;
            remoteVideo.play();
          });

          setPeer(newPeer);
        })
        .catch((error) => {
          if (error.name === "NotAllowedError") {
            setError("Camera access denied. Please grant permission.");
          } else if (error.name === "NotFoundError" || error.name === "NotReadableError") {
            setError("Camera not found or unavailable.");
          } else if (error.name === "NotReadableError") {
            setError("Camera is currently in use by another application.");
          } else {
            setError("Error accessing camera: " + error.message);
          }
        });
    }
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl mb-4">Live View</h1>
      {error ? (
        <Alert>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : (
        <div className="relative w-full max-w-4xl">
          <video ref={videoRef} className="w-full h-auto bg-black" autoPlay muted />
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Render bounding boxes and HUD here */}
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveView;