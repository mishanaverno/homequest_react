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
        if (!this.state.opened){
            const { addToPanel } = this.props;
            const close_btn = {
                name: 'close',
                label: 'Close',
                onClick: (e)=>{this.close()}
            }
            addToPanel([close_btn])
        }    
    }

    close = () => {
        const { removefromPanel } = this.props;
        this.setState({
            opened:false
        })
        removefromPanel([
            'close', 'start'
        ])
    }
    render() {
        let classNames = 'quest ';
        if (this.state.opened) classNames += 'opened ';
        const { 
            title,
            reward,
            state,
            description,
            customer_id,
            customer_name,
            customer_avatar,
            performer_id,
            performer_name,
            performer_avatar,
        } = this.props;
        let stateClassNames = "quest-header-state "+state;
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
                            <div className="quest-reward">
                                { 'Reward: '}
                                <span className="quest-reward-value">{reward}</span> 
                            </div>
                        </div>
                        <div className="quest-header-persons">

                        </div>
                        <div className={stateClassNames}></div>
                    </div>
                    <div className="quest-container">
                        <div className="quest-description">
                            {description}
                        </div>
                        <div className="quest-customer-info">
                            
                        </div>
                    </div>
            </div>
        );
    }
}    