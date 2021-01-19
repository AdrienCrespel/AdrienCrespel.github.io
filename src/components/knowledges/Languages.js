import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp: 1.8},
            {id: 2, value: "Css", xp: 2},
            {id: 3, value: "Php", xp: 0.7},
            {id: 4, value: "Python", xp: 0.4}
        ]
    }

    render() {
        let {languages} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="langages"
                />
            </div>
        );
    }
}

export default Languages;