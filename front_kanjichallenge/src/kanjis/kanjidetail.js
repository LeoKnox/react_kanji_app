import React, { Component } from 'react';
import KanjiUpdate from './kanjiupdate';
import axios from 'axios';

class KanjiDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.updateKanjiDetails = this.updateKanjiDetails.bind(this);
        this.deleteKanji = this.deleteKanji.bind(this);
    }

    updateKanjiDetails() {
        this.setState({ showComponent: true });
    }

    deleteKanji(obj) {
        console.log(obj);
        axios.delete("https://127.0.0.1:8000".concat(obj))
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const obj = this.props.kanjiDetail
        return(
            <div style={{ color: "yellow", border: "1px solid yellow"}}>
                <h4>{obj.kanji}</h4>
                <h5>Meaning: {obj.meaning} Pronounciation: {obj.pronounciation}</h5>
                <h6>Reading: {obj.reading} Grade: {obj.grade} Strokes: {obj.strokes}</h6>
                <button
                    style={{ backgroundColor: "white" }}
                    onClick={() => this.updateKanjiDetails()}>
                    Update
                </button>
                <button
                    style={{ backgroundColor: "red" }}
                    onClick={() => this.deleteKanji(obj.delete)}>
                    Delete
                </button>
                {this.state.showComponent ? <KanjiUpdate kanjiupdate={obj} /> : null}
            </div>
        );
    }
}

export default KanjiDetail;