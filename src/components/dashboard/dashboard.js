import React from 'react';
import AppFrame from '../app-frame';
import Gang from '../gang';

export default class Dashboard extends AppFrame {
    state = {
        gangs: []
    }
    componentDidMount(){
        this.updateGangs();
    }
    async updateGangs(){
        const data = await this.props.getData();
        console.log(data);
        // this.setState({
        //     gangs: [ ...data.gangs ]
        // })
    }
    createGangs(){
        const { addToPanel, removefromPanel } = this.props;
        return this.state.gangs.map((gang) => (
            <Gang 
                key={gang.id} 
                removefromPanel={removefromPanel}
                addToPanel={addToPanel}
                {...gang } />
        ));
    }
    render(){
        
        return this.frame(
            <div className="dashboard">
                <div className="dashboard-container">
                    { this.createGangs() }
                </div>
            </div>
        );
    }
}