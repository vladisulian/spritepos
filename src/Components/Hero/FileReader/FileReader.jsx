import { useState } from "react";

export const FileReadercomp = () => {
  const [selectedIMG, setSelectedIMG] = useState(null);
  const [IMGSrc, setIMGSrc] = useState("");

  const handleFileInputChange = (e) => {
    const img = e.target.files[0];
    setSelectedIMG(img);
    previewFile(img);
  };

  const previewFile = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => {
      setIMGSrc(reader.result);
    };
  };

  return (
    <div>
      <input type="file" id="inputImage" onChange={handleFileInputChange} />
      {selectedIMG && (
        <img
          id="imagePreview"
          src={IMGSrc}
          alt="pic"
          style={{ maxWidth: "100%" }}
        />
      )}
    </div>
  );
};
