import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react";

const CustomWebcam = ({ sendImage, setUploadResultMessage, setAuth }) => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [mirrored, setMirrored] = useState(false);

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[arr.length - 1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }


  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);

    const file = dataURLtoFile(imageSrc, 'image.jpg');
    sendImage(file);

  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
    setUploadResultMessage('Please upload an image to authentication.');
    setAuth(false);
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