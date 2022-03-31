import React from 'react';
import data from '../Data/fighters.json';

class Fight extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            fighterName: ''
        }
    }

    render () {
        return (
            <div className="fight-container">
               
                <div className="fighter1-area">Fighter 1</div>
                <div className="fighter2-area">Fighter 2</div>
            </div>
        )
    }
}

export default Fight;