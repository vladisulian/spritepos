import { useState } from "react";

export const FileRead = () => {
  const [selectedIMG, setSelectedIMG] = useState(null);
  const [selectedSprite, setSelectedSprite] = useState(null);
  const [IMGSrc, setIMGSrc] = useState("");
  const [spriteSrc, setSpriteSrc] = useState("");

  const handleAddIMG = (e) => {
    const img = e.target.files[0];
    setSelectedIMG(img);
    renderIMG(img);
  };
  const handleAddSprite = (e) => {
    const sprite = e.target.files[0];
    setSelectedSprite(sprite);
    renderSprite(sprite);
  };

  const renderIMG = (img) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => setIMGSrc(reader.result);
  };

  const renderSprite = (sprite) => {
    const reader = new FileReader();
    reader.readAsDataURL(sprite);
    reader.onloadend = () => setSpriteSrc(reader.result);
  };

  return (
    <>
      <div className="FileReader">
        <label>
          Фон:
          <input type="file" id="inputImage" onChange={handleAddIMG} />
        </label>
        <label>
          Спрайт:
          <input type="file" id="inputSprite" onChange={handleAddSprite} />
        </label>
      </div>
      {selectedIMG && (
        <div className="image-container" id="result">
          <img
            src={IMGSrc}
            alt="pic"
            style={{ maxWidth: "100%", height: "100%" }}
          />

          {selectedSprite && (
            <img
              id="sprite"
              src={spriteSrc}
              alt="sprite"
              style={{ maxWidth: "100%", height: "100%" }}
            />
          )}
        </div>
      )}
    </>
  );
};
