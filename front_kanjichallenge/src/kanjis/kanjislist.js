import React, { Component } from 'react';
import DummyData from './dummydata.json';
import KanjiDetail from './kanjidetail';

class KanjiList extends Component {
    render() {
        return(
            <div>
                {DummyData.map( item => {
                    return <KanjiDetail p = {item}/>
                    })
                }
            </div>
        )
    }
}

export default KanjiList;