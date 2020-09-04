import React from 'react';
import Quest from '../quest'


export default class Gang extends React.Component {

    constructor(){
        super();
        this.state = {
            opened: true
        }
    }

    toggleOpened = () => {
        this.setState(({opened}) => {return { opened: !opened}})
    }

    render(){
        let classNames = 'gang ';
        if (this.state.opened) classNames += 'opened ';

        const {quests = [], name, addToPanel, removefromPanel} = this.props;
        const questElements = quests.map((quest) => {
            return (
                <Quest 
                    { ... quest} 
                    addToPanel={addToPanel} 
                    removefromPanel={removefromPanel}
                    key={quest.id}/>
            );
        });
        return (
            <div className={classNames}>
                <div className="gang-header" onClick={this.toggleOpened}>
                    <p className="header-title">{name}</p>
                    <p className="header-extratext">adiitional text</p>   
                </div>
                <div className="gang-container">
                    {questElements}
                </div>
            </div>
        );
    }
}