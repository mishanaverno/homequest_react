import React from 'react';
import Input from '../input';

export default class InputReward extends Input{
    componentDidUpdate(prevProps, prevState){
        if(prevState.value !== this.state.value){
            const { step } = this.getSwapperData();
            this.setState({
                swapper: this.state.value * step
            })
        }
    }
    onSwapperLineMouseUp = (e) => {
        const { step } = this.getSwapperData();
        const value = e.nativeEvent.offsetX;
        this.changeValue(Math.round(value/step));
    }
    changeValue(value){
        this.setState((state) => {
            return {
                value: value,
            }
        });
    }
    getSwapperData(){
        const swapperLine = document.getElementById('swapper-line');
        const width = swapperLine.clientWidth;
        const step = Math.floor(width / this.props.max);
        return {
            width: width,
            step: step
        }
    }
    onChange = (e) => {
        const { value } = e.target;
        const { max } = this.props;
        let valid = true;
        const intValue = parseInt(value);
        if (/[^\d]/.test(value)) valid = false;
        if (isNaN(intValue) || intValue < 0 ||intValue > max) valid = false;
        if (valid){
            this.changeValue(intValue);
        }
    }
    render(){
        const { label, value, invalid, error, swapper } = this.state;
        const { base, max } = this.props;
        const swapperStyle = {
            left: swapper        }
        let classNames = 'form-row reward ';
        if(invalid) classNames += 'invalid ';
        return (
            <div className={classNames}>
                <label>
                    <span>{label}</span>
                    <span className="error">{error}</span>
                </label>
                <div className="input-reward-wrapper">
                <span className="standart-reward">{base}</span>
                    <span>+</span>
                    <input
                        className="input-reward" 
                        type="tel"
                        value={value}
                        onChange={this.onChange}
                        onBlur={this.onUpdate}
                    />
                    <span>=</span>
                    <span className="total-reward">{+value + base}</span>
                </div>
                <div className="reward-swiper-container">
                    <span className="reward-swiper-title">Swipe to set reward value</span>
                    <div className="reward-swiper-wrapper">
                        <span>0</span>
                        <div className="reward-swiper">
                            <div 
                                className="reward-swiper-line"
                                id="swapper-line"
                                onMouseUp={this.onSwapperLineMouseUp}
                            >
                                <div
                                    className="reward-swiper-value"
                                    style={swapperStyle} 
                                    draggable
                                ></div>
                            </div>
                        </div>
                        <span>{max}</span>
                    </div>
                </div>
            </div>
        );
    }
}