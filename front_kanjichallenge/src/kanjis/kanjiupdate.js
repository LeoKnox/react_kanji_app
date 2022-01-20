import React, { Component } from "react";
import axios from "axios";

class KanjiForm extends Component {
    constructor(props) {
        console.log("constructed"+props.reading);
        super(props);
        this.state = {
            obj_to_update: this.props.kanjiUpdate,
            value: this.props.reading,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value:event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .patch("http://127.0.0.1:8000".concat(this.state.obj_to_update.update),
            {
                reading: this.state.value,
            })
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const {
            value
        } = this.state;
        return (
            <div style={{ color: "red", border: "1px solid red" }}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h6>Updating</h6>
                        <input type="text" value={value} onChange={this.handleChange} />
                    </div>
                    <input
                        style={{ backgroundColor: "white" }}
                        type="submit"
                        value="submit"
                    />
                </form>
            </div>
        );
    }
}

export default KanjiForm;