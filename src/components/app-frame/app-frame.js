import React from 'react';

export default class AppFrame extends React.Component{
    state = {}
    constructor(props){
        super();
        this.updateData(props);
    }
    async updateData(params){
        const { getData = (params) => {}  } = params;
        const response = await getData(params);
        if(response) {
            const { data = {}} = response;
            this.setState({
                ...data
            });
        }
    }
    frame(jsx){
        return (
            <div className="app-frame">
                {jsx}
            </div>
        );
    }
}