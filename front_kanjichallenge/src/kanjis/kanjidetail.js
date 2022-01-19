import React, { Component } from 'react';

class KanjiDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this.updateKanjiDetails = this.updateKanjiDetails.bind(this);
    }
    updateKanjiDetail() {
        this.setState({ showComponent: true });
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
                {this.state.showComponent ? <KanjiUpdate kanjiupdate={obj} /> : null}
            </div>
        );
    }
}

export default KanjiDetail;