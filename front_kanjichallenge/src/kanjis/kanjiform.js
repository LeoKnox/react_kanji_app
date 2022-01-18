import React, { Component } from "react";
import axios from "axios";

class KanjiForm extends React.Component {
    handleChange(event) {
        //code
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        const { kanji_name } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="kanji_name"
                        value={kanji_name}
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default KanjiForm;