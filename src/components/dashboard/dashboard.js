import React from 'react';
import Gang from '../gang';

const Dashboard = ({gangs}) =>{
    const _gangs = gangs.map((gang) => (
        <Gang key={gang.id} {...gang}/>
    ));
    return (
        <div className="dashboard">
            <div className="dashboard-container">
                { _gangs }
            </div>
        </div>
    );
}
export default Dashboard;