import React from 'react';

const PanelButton = ({ label, onClick, name, removefromPanel }) => {
    const click = (e) => {
        onClick(e);
        removefromPanel(name);
    }
    return (
        <button 
            className="panel-btn"
            type="button"
            onClick={click}
        >
            {label}
        </button>
    );
}

export default PanelButton;