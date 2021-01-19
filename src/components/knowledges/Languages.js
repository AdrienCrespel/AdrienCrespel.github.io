import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Python", xp: 1.2},
            {id: 2, value: "C/C++", xp: 0.8},
            {id: 3, value: "C#", xp: 0.6},
            {id: 4, value: "Javascript", xp: 0.7},
            {id: 5, value: "HTML/CSS", xp: 0.6},
            {id: 6, value: "SQL", xp: 0.4},
            {id: 7, value: "Java", xp: 0.5}
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