import React, { Component } from 'react';
import axios from 'axios';
import KanjiDetail from './kanjidetail';

class KanjiList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kanjisData: [],
            kanji: "",
            showComponent: false,
        };
        this.getKanjiDetail = this.getKanjiDetail.bind(this);
        this.showKanjiDetails = this.showKanjiDetails.bind(this);
    }

    getKanjiDetail(item) {
        axios
            .get("http://127.0.0.1:8000".concat(item.absolute_url))
            .then((response) => {
                this.setState({ kanji: response.data });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    showKanjiDetails(item) {
        this.getKanjiDetail(item);
        this.setState({ showComponent: true });
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
                {this.state.kanjisData.map((item) => {
                    return (
                        <h3 key={item.idkanji_dict} onClick={() => this.showKanjiDetails(item)}>
                            {item.kanji}- {item.meaning}
                        </h3>
                    );
                })}

                {this.state.showComponent ? (
                    <KanjiDetail kanjiDetail={this.state.kanji} />
                ) : null}
            </div>
        );
    }
}

export default KanjiList;