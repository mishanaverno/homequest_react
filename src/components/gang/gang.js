import React from 'react';
import Quest from '../quest'
import { FRAMES } from '../app/app.js';


export default class Gang extends React.Component {

    constructor(){
        super();
        this.state = {
            opened: true
        }
    }

    toggleOpened = (e) => {
        const { nodeName  } = e.target;
        if (nodeName === 'P' || nodeName === 'DIV'){
            this.setState(({opened}) => {return { opened: !opened}})
        }
    }
    onCreateQuestClick = (e) => {
        const props = {
            data: {
                gang_id: this.props.id,
                base_reward: this.props.reward,
            },
            base: this.props.reward,
            userStyle: this.props.userStyle,
        }
        this.props.openFrame(FRAMES.CREATE_QUEST, props);
    }
    render(){
        
        let classNames = 'gang ';
        if (this.state.opened) classNames += 'opened ';

        const {quests = [], name, openFrame } = this.props;
        const questElements = quests.map((quest) => {
            return (
                <Quest 
                    { ... quest} 
                    openFrame={openFrame}
                    key={quest.id}/>
            );
        });
        return (
            <div className={classNames}>
                <div className="gang-header" onClick={this.toggleOpened}>
                    <div className="gang-header-info">
                        <p className="header-title">{name}</p>
                        <p className="header-extratext">adiitional text</p>   
                    </div>
                    <div className="gang-header-btn">
                        <button className="btn icon success" onClick={this.onCreateQuestClick}>+</button>
                    </div>
                </div>
                <div className="gang-container">
                    {questElements}
                </div>
            </div>
        );
    }
}