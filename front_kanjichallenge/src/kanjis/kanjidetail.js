import React, { Component } from 'react';

class KanjiDetail extends Component {
    render() {
        const obj = this.props.kanjiDetail
        return(
            <div style={{ color: "yellow", border: "1px solid yellow"}}>
                <h4>{obj.kanji}</h4>
                <h5>Meaning: {obj.meaning} Pronounciation: {obj.pronounciation}</h5>
                <h6>Reading: {obj.reading} Grade: {obj.grade} Strokes: {obj.strokes}</h6>
            </div>
        );
    }
}

export default KanjiDetail;