import React, { Component } from 'react';
import DummyData from './dummydata.json';

class KanjiList extends Component {
    render() {
        return(
            <div>
                {DummyData.map( p =>
                    <h4>{p.kanji} : {p.meaning}</h4>
                    )
                }
            </div>
        )
    }
}

export default KanjiList;