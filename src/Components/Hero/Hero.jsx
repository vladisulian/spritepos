import "./Hero.css";
import { FileRead } from "./FileReader/FileReader";
import { SpritePos } from "./SpritePosition/SpritePos";
import { useState } from "react";

export const Hero = () => {
  // * pictures
  const [selectedIMG, setSelectedIMG] = useState(null);
  const [selectedSprite, setSelectedSprite] = useState(null);
  // * pictures src
  const [IMGSrc, setIMGSrc] = useState("");
  const [spriteSrc, setSpriteSrc] = useState("");
  // * view position in px
  const [vertikal, setVertikal] = useState(0);
  const [horizontal, setHorizontal] = useState(0);

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

  const handleChangeSpritePos = (id, value) => {
    const spriteImage = document.querySelector("#sprite");
    switch (id) {
      case "verticalPosition":
        spriteImage.style.bottom = value + "px";
        setVertikal(value);
        break;

      case "horizontalPosition":
        spriteImage.style.left = value + "px";
        setHorizontal(value);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <FileRead
        handleAddIMG={handleAddIMG}
        handleAddSprite={handleAddSprite}
        selectedIMG={selectedIMG}
        selectedSprite={selectedSprite}
      />
      {selectedIMG && (
        <>
          <div className="image-container">
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
          {selectedSprite && (
            <SpritePos
              changeSpritePosition={handleChangeSpritePos}
              vertikal={vertikal}
              horizontal={horizontal}
            />
          )}
        </>
      )}
    </>
  );
};
