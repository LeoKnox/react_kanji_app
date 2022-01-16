import React, { Component } from 'react';

class KanjiDetail extends Component {
    render() {
        const p = this.props.p
        return(
            <div>
                <h4>{p.idkanji_dict}</h4>
                <h4>{p.kanji}</h4>
                <h4>{p.meaning}</h4>
            </div>
        )
    }
}

export default KanjiDetail;