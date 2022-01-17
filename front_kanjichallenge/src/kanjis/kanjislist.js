import React, { Component } from 'react';
import axios from 'axios';
import KanjiDetail from './kanjidetail';

class KanjiList extends Component {
    state = {
        kanjisData:[],
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:8000/")
        .then((response) => {
            this.setState({kanjisData: response.data})
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                {this.state.kanjisData.map( item => {
                    return <h3>{item.kanji} : {item.meaning}</h3>
                })}
            </div>
        )
    }
}

export default KanjiList;