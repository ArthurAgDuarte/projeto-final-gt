import React from 'react';
import './style.css';
import CamisetasIcon from './svg/Camisa.svg';
import CalcaIcon from './svg/Calça.svg';
import BonesIcon from './svg/Bone.svg';
import HeadphoneIcon from './svg/Fone.svg';
import TenisIcon from './svg/Tenis.svg';

function HighlightButtons() {
    const buttons = [
        { name: 'Camisetas', icon: CamisetasIcon },
        { name: 'Calças', icon: CalcaIcon },
        { name: 'Bonés', icon: BonesIcon },
        { name: 'Headphones', icon: HeadphoneIcon },
        { name: 'Tênis', icon: TenisIcon }
    ];

    return (
        <div className="highlight-buttons">
            <h2>Coleções em Destaque</h2>
            <div className="buttons-container">
                {buttons.map((button, index) => (
                    <div key={index} className="button-wrapper">
                        <button className="highlight-button">
                            <img src={button.icon} alt={button.name} />
                        </button>
                        <span className="button-name">{button.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HighlightButtons;