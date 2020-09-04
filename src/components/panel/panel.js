import React from 'react';
import PanelButton from '../panel-button';

const Panel = ({buttons, removefromPanel}) => {
    
    const elements = buttons.map((button)=>{
        return <PanelButton {...button } removefromPanel={removefromPanel} key={button.name} />
    })
    return (
            <div className="panel">
                {elements}
            </div>
        );
}
export default Panel