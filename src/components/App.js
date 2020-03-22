import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';

class App extends Component {

    state = {
        language: 'english',
        color: 'primary'
    }

    onChangeLanguage = (language, color) => {
        this.setState({ language, color })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-sm-12 col-md-8 offset-md-2">
                        <h1 className="text-center text-primary my-5">React Tutorial App For Context</h1>
                        <p className="h4 mt-3">Select Language: </p>
                        <i className="flag us" onClick={() => this.onChangeLanguage("English", "primary")}></i>
                        <i className="flag france" onClick={() => this.onChangeLanguage("Francis", "danger")}></i>
                        <i className="flag egypt" onClick={() => this.onChangeLanguage("Arabic", "success")}></i>
                        {this.state.language}
                        <br />
                        <ColorContext.Provider value={this.state.color}>
                            <LanguageContext.Provider value={this.state.language}>
                                <UserCreate />
                            </LanguageContext.Provider>
                        </ColorContext.Provider>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
