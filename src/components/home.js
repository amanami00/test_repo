import React, { Component } from 'react';
import Login from './login';
import Main from './main';

export class Home extends Component {
    state = {
        isLogin: false,
        uname: '',
        pass: '',
        selectedSlides: '',
        isslidesSubmitted: false
    };

    handleOnChange = event => {
        if (event.target.name === 'uname') {
            this.setState({ uname: event.target.value });
        }
        this.setState({ pass: event.target.value });
    };

    handleOnClick = () => {
        const { uname, pass } = this.state;
        if (uname === 'shadi' && pass === '123') {
            this.setState({ isLogin: true });
        }
    };

    handleOnSelect = event => {
        this.setState({ selectedSlides: event.target.value });
    };

    handleSubmitSlides = () => {
        this.setState({ isslidesSubmitted: true });
    };

    toggle = () => {
        this.setState(prevState => ({
            isslidesSubmitted: !prevState.isslidesSubmitted
        }));
    };

    render() {
        const { isLogin, selectedSlides, isslidesSubmitted } = this.state;

        if (!isLogin)
            return (
                <div className="container">
                    <Login
                        onInputChange={ this.handleOnChange }
                        onSubmit={ this.handleOnClick }
                    />
                </div>
            );

        return (
            <div className="container">
                <Main
                    onInputChange={ this.handleOnSelect }
                    onSubmit={ this.handleSubmitSlides }
                    selectedSlides={ selectedSlides }
                    isslidesSubmitted={ isslidesSubmitted }
                    toggle={ this.toggle }
                />
            </div>
        );
    }
};

export default Home;
