export const FileRead = ({ handleAddIMG, handleAddSprite }) => {
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
    </>
  );
};
