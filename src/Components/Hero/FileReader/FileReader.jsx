export const FileRead = ({
  handleAddIMG,
  handleAddSprite,
  selectedSprite,
  selectedIMG,
}) => {
  return (
    <div className="FileReader">
      <label>
        {selectedSprite && !selectedIMG && (
          <p className="choose-background">
            Выберите фон, чтобы отобразить спрайт
          </p>
        )}
        Фон:
        <input type="file" id="inputImage" onChange={handleAddIMG} />
      </label>
      <label>
        Спрайт:
        <input type="file" id="inputSprite" onChange={handleAddSprite} />
      </label>
    </div>
  );
};
