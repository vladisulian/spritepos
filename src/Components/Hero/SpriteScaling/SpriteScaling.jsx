import "./SpriteScaling.css";

export const SpritePos = ({ changeSpritePosition }) => {
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
          defaultValue={0}
        />
      </label>
      <label>
        Позиция по горизонтали
        <input
          type="range"
          id="horizontalPosition"
          min="-1000"
          max="200"
          defaultValue={0}
          onInput={handleChangePosition}
        />
      </label>
      <></>
    </div>
  );
};
