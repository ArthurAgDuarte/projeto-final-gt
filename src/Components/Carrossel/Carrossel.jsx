import { useState } from "react";
import "../Carrossel/Carrossel.css"

import imgA from '../../assets/rapaz.png'; 
import imgB from '../../assets/tenispreto.png';
import imgC from '../../assets/rapaz.png';
import imgD from '../../assets/tenispreto.png';
import imgE from '../../assets/rapaz.png';
import imgF from '../../assets/tenispreto.png';
import imgG from '../../assets/rapaz.png';
import imgH from '../../assets/tenispreto.png';

import setaEsquerda from '../../assets/setaEsquerda.svg';
import setaDireita from '../../assets/setaDireita.svg';

const imagensCarrosel = [imgA, imgB, imgC, imgD, imgE, imgF, imgG, imgH];

export default function Carrossel({
  // width = 1440,
  // height = 875,
  // radius = "4px",
  showThumbs = false,  // Verifique se o valor padrão é `false`
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
    <div className="gallery">
      <button onClick={handlePrev} className="gallery-button">
        <img src={setaEsquerda} alt="Anterior" className="seta"/>
      </button>

      <img
        src={imagensCarrosel[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="produtos"
      />

      <button onClick={handleNext} className="gallery-button">
        <img src={setaDireita} alt="Próximo" className="seta" />
      </button>

      {showThumbs && (
        <div className="thumbnails">
          {imagensCarrosel.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumb ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className="thumbnail"
            />
          ))}
        </div>
      )}
    </div>
  );
}
