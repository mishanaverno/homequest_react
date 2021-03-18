import React from 'react';
import AppFrame from '../../app-frame';
import { FRAMES } from '../../app/app';
import Form from '../../form';
import Hero from '../../hero';



export default class GangDetail extends AppFrame{
    onSubmitForm = (params) => {
    }
    editGang = () => {
        const {
            id
        } = this.props.frameData;
        const {
            name
        } = this.state;
        this.props.openFrame(FRAMES.EDIT_GANG, {id, name})
    }
    getButtons(){
        const {
            id
        } = this.props.frameData;
        console.log(this.props, this.state)
        const buttons = [];
        buttons.push({
            name: 'edit',
            label: 'Edit',
            className: 'create',
            onClick: this.editGang
        });
        buttons.push({
            name: 'invite',
            label: 'Invite',
            className: 'success',
            onClick: ()=>{this.props.invite(id)}
        });
        buttons.push({
            name: 'back',
            label: 'Back',
            className: 'cancel',
            onClick: ()=>{this.props.openFrame(FRAMES.DASHBOARD)}
        });
        return buttons;
    }
    getHeroes(){
        const { heroes = [] } = this.state;
        return heroes.map((hero) => {
            hero.openFrame = this.props.openFrame;
            return (<Hero
                { ...hero }
                key={hero.id}
            />);
        });
    }
    render() {
        console.log(this.props, this.state)
        const { 
            name
        } = this.state;
        const buttons = this.getButtons();
        return this.frame(
            <div className="form gang gang-detail">
                <div className="form-header">
                    <p className="header-title">{name}</p>
                    <p className="header-extratext">Some info</p>
                </div>
                <div className="heroes-containder">
                    {this.getHeroes()}
                </div>
                <Form 
                    buttons={buttons}
                />
            </div>
        );
    }
}