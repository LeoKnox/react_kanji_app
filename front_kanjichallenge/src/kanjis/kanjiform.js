import React, { Component } from "react";
import axios from "axios";

class KanjiForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            idkanji_dict: " ",
            kanji: " ",
            strokes: " ",
            meaning: " ",
            pronounciation: " ",
            reading: " ",
            grade: " ",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]:event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios
            .post("http://127.0.0.1:8000/create/", {
                idkanji_dict: this.state.idkanji_dict,
                kanji: this.state.kanji,
                strokes: this.state.strokes,
                meaning: this.state.meaning,
                pronounciation: this.state.pronounciation,
                reading: this.state.reading,
                grade: this.state.grade,
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
            idkanji_dict,
            kanji,
            strokes,
            meaning,
            pronounciation,
            reading,
            grade,
        } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Kanji ID: 
                    <input
                        type="text"
                        name="idkanji_dict"
                        value={idkanji_dict}
                        onChange={this.handleChange}
                    />
                    Kanji: 
                    <input
                        type="text"
                        name="kanji"
                        value={kanji}
                        onChange={this.handleChange}
                    />
                    Strokes: 
                    <input
                        type="text"
                        name="strokes"
                        value={strokes}
                        onChange={this.handleChange}
                    />
                    Meaning: 
                    <input
                        type="text"
                        name="meaning"
                        value={meaning}
                        onChange={this.handleChange}
                    />
                    Pronounciation: 
                    <input
                        type="text"
                        name="pronounciation"
                        value={pronounciation}
                        onChange={this.handleChange}
                    />
                    Reading: 
                    <input
                        type="text"
                        name="reading"
                        value={reading}
                        onChange={this.handleChange}
                    />
                    Grade: 
                    <input
                        type="text"
                        name="grade"
                        value={grade}
                        onChange={this.handleChange}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default KanjiForm;