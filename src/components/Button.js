import React, { Component } from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {

    renderText = language => {
        return language === 'Arabic' ? 'إرسال' : language === 'Francis' ? 'Summetre' : 'Submit'
    }

    renderButton = color => {
        return (
            <button className={`btn btn-${color}`}>
                <LanguageContext.Consumer>
                    {language => this.renderText(language)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return (
            <ColorContext.Consumer>
                {color => this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button;
