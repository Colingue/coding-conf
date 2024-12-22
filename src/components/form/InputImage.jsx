import { useRef, useState } from "react";
import logoUpload from "../../assets/images/icon-upload.svg";
import { motion } from "motion/react";
import IconInfo from "../icon/IconInfo";
export default function InputImage({ label, onChange, caption, error }) {
  const ref = useRef();

  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);

  const clickOnInput = (e) => {
    e.preventDefault();
    e.stopPropagation();
    ref.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setFile(file);
      onChange({ target: { files: [file] } });
    }
  };

  return (
    <>
      <div className="image-input">
        {label && <p>{label}</p>}
        <div
          className="image-input-drag-container"
          onClick={clickOnInput}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {isDragging ? (
            <motion.div
              whileDrag={{ backgroundColor: "red" }}
              className="image-input-drag-overlay"
            >
              <p>Drop your image here</p>
            </motion.div>
          ) : file ? (
            <div className="image-input-preview">
              <div className="image-input-preview-file">
                <img src={URL.createObjectURL(file)} alt="Avatar" />
              </div>

              <div className="image-input-preview-buttons">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setFile(null);
                    onChange({ target: { files: [] } });
                  }}
                >
                  Remove image
                </button>
                <button onClick={clickOnInput}>Change image</button>
              </div>
            </div>
          ) : (
            <div>
              <div className="image-input-btn">
                <img src={logoUpload} alt="Upload" />
              </div>
              <p>Drag & Drop your image here</p>
            </div>
          )}
        </div>

        {error && (
          <div className="error-container">
            <IconInfo />
            <small>{error}</small>
          </div>
        )}

        {!error && caption && (
          <div className="caption">
            <IconInfo />
            <small className="caption">{caption}</small>
          </div>
        )}

        <input
          type="file"
          hidden
          ref={ref}
          onChange={(e) => {
            onChange(e);
            setFile(e.target.files[0]);
          }}
        />
      </div>
    </>
  );
}
