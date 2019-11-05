import React from 'react'

export default class Genres extends React.Component {
    constructor() {
        super();
        this.state = {
            showDescription: true,
        };
    }

    InputChange = (id) => {
        this.props.handler(id);
    }

    render() {
        const {genre, id} = this.props;
        return (
            <button
                style={{
                    display: 'inline'
                }}
                onClick={() => {
                    this.InputChange(id);
                }}>
                {genre}
            </button>

        )
    }
}
