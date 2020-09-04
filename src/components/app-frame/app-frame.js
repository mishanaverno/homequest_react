import React from 'react';

export default class AppFrame extends React.Component{
    state = {}
    
    frame(jsx){
        return (
            <div className="app-frame">
                {jsx}
            </div>
        );
    }
}