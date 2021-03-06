import React, { useRef, useState } from "react";
import "./styles.scss";
import classNames from "classnames";
import {
  faCheck,
  faFileUpload,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/** DragZone
 * @param validTypes array of valid file types. ex: "text/plain", "image/jpg", "image/png", "image/gif", "image/x-icon"
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
 */

const DragZone = ({
  handleFile = () => {},
  validTypes = ["text/plain"],
  ...rest
}) => {
  const [selectedFile, setSelectedFile] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const fileInputRef = useRef();

  const validateFile = (file) => validTypes.includes(file.type);

  const handleFiles = (files) => {
    [...files].forEach((file) => {
      if (validateFile(file)) {
        setSelectedFile(file.name);
        handleFile(file);
      } else {
        setIsInvalid(true);
        setSelectedFile(false);
        setTimeout(() => setIsInvalid(false), 2000);
      }
    });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOver(false);
    const files = e.dataTransfer.files;
    if (files.length) handleFiles(files);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const filesSelected = () => {
    if (fileInputRef.current.files.length)
      handleFiles(fileInputRef.current.files);
  };

  const classes = classNames({
    "drag-zone": true,
    over: isOver,
    selected: selectedFile,
    unselected: !selectedFile,
    invalid: isInvalid
  });

  return (
    <div
      className={classes}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      {...rest}
    >
      <input
        ref={fileInputRef}
        className="drag-zone__input"
        type="file"
        multiple
        onChange={filesSelected}
      />

      {!selectedFile && (
        <>
          <div className="icon">
            <FontAwesomeIcon icon={isInvalid ? faTimes : faFileUpload} />
          </div>
          <p>
            {isInvalid
              ? "Archivo invalido"
              : "Haz click para seleccionar un archivo o arrastralo aquí."}
          </p>
        </>
      )}

      {selectedFile && (
        <>
          <div className="icon">
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <p>{selectedFile}</p>
        </>
      )}
    </div>
  );
};

export default DragZone;
