const imagensCarrosel = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH];

export default function Carrossel({
  width = 1440,
  height = 875,
  radius = "4px",
  showThumbs,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imagensCarrosel.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imagensCarrosel.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery" style={{ width: "100%", height: "100%" }}>
      <button onClick={handlePrev} className="gallery-button">
        <img src={setaEsquerda} alt="Anterior" />
      </button>

      <img
        src={imagensCarrosel[currentIndex]}
        alt={`Slide ${currentIndex + 1}` }
        style={{ borderRadius: radius, width: "100%", height: "100%" }}
      />

      <button onClick={handleNext} className="gallery-button">
        <img src={setaDireita} alt="Próximo" />
      </button>

      {showThumbs && (
        <div className="thumbnails">
          {imagensCarrosel.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumb ${index + 1}`}
              style={{
                width: showThumbs.width,
                height: showThumbs.height,
                borderRadius: radius,
                border: currentIndex === index ? "2px solid #primary" : "none",
              }}
              onClick={() => setCurrentIndex(index)}
              className="thumbnail"
            />
          ))}
        </div>
      )}
    </div>
  );
}