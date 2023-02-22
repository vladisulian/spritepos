import { useState } from "react";
import "./SpriteScaling.css";

export const SpritePos = ({ changeSpritePosition }) => {
  //   const verticalPosInput = document.querySelector("#verticalPosition");
  //   const horizontalPosInput = document.querySelector("#horizontalPosition");

  const handleChangePosition = (e) => {
    changeSpritePosition(e.target.id, e.target.value);
  };

  //   spriteImage.style.
  return (
    <div className="scale-container">
      <label>
        Позиция по вертикали
        <input
          type="range"
          id="verticalPosition"
          onInput={handleChangePosition}
          min="-150"
          max="150"
        />
      </label>
      <label>
        Позиция по горизонтали
        <input
          type="range"
          id="horizontalPosition"
          min="-150"
          max="1000"
          onInput={handleChangePosition}
        />
      </label>
      <></>
    </div>
  );
};
