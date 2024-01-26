import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

const CustomWebcam = () => {
    const webcamRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(null);
    const [mirrored, setMirrored] = useState(false);

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
    }, [webcamRef]);

    const retake = () => {
        setImgSrc(null);
      };

    return (
        <div className="container">
            <h1>Webcam</h1>
            {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam height={600} width={600} ref={webcamRef} mirrored={mirrored} screenshotFormat="image/jpeg" />
      )}
      <div className="controls">
        <div>
          <input
            type="checkbox"
            checked={mirrored}
            onChange={(e) => setMirrored(e.target.checked)}
          />
          <label>Mirror</label>
        </div>
      </div>
      <div className="btn-container">
        {imgSrc ? (
          <button onClick={retake}>Retake photo</button>
        ) : (
          <button onClick={capture}>Capture photo</button>
        )}
      </div>
        </div>
    );
};

export default CustomWebcam;