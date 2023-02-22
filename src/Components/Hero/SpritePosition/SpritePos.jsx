import "./SpritePos.css";

export const SpritePos = ({ changeSpritePosition, vertikal, horizontal }) => {
  const handleChangePosition = (e) =>
    changeSpritePosition(e.target.id, e.target.value);

  return (
    <div className="scale-container">
      <label>
        Позиция по вертикали (top = {vertikal}px)
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
        Позиция по горизонтали(left = {horizontal}px)
        <input
          type="range"
          id="horizontalPosition"
          min="-200"
          max="1000"
          defaultValue={0}
          onInput={handleChangePosition}
        />
      </label>
      <></>
    </div>
  );
};
