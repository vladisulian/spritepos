import "./Hero.css";
import { FileRead } from "./FileReader/FileReader";
import { SpritePos } from "./SpriteScaling/SpriteScaling";
import { useState } from "react";

export const Hero = () => {
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

  const spriteImage = document.querySelector("#sprite");
  const handleChangeSpritePos = (id, value) => {
    switch (id) {
      case "verticalPosition":
        // console.log(id, value);
        spriteImage.style.bottom = value + "px";
        break;

      case "horizontalPosition":
        spriteImage.style.right = value + "px";
        break;

      default:
        break;
    }
  };

  return (
    <>
      <FileRead handleAddIMG={handleAddIMG} handleAddSprite={handleAddSprite} />
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
          <SpritePos changeSpritePosition={handleChangeSpritePos} />
        </>
      )}
    </>
  );
};
