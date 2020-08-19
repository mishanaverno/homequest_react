import React from 'react';

export default class Quest extends React.Component {
    constructor() {
        super();
        this.state = {
            opened: false
        }
    }
    
    open = () => {
        this.setState({
            opened:true
        })
    }

    render() {
        let classNames = 'quest ';
        if (this.state.opened) classNames += 'opened ';
        const { title } = this.props;
        return (
            <div 
                className={classNames}
                >
                    <div 
                        className="quest-header" 
                        onClick={this.open}
                        >
                        <div className="quest-header-info">
                            <div className="quest-header-title">
                                {title}
                            </div>
                        </div>
                        <div className="quest-header-performer"></div>
                        <div className="quest-header-state"></div>
                    </div>
                    <div className="quest-container"></div>
            </div>
        );
    }
}    