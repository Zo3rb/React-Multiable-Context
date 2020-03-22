import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {

    renderLabel = label => {
        return (
            <>
                <label className="text-white">{label === 'Arabic' ? 'إرسال' : label === 'Francis' ? 'Summtre' : 'Submit'}</label>
                <input type="text" />
            </>
        )
    }

    render() {
        return (
            <div className="field">
                <LanguageContext.Consumer>
                    {label => this.renderLabel(label)}
                </LanguageContext.Consumer>
            </div>
        );
    }
}

export default Field;
