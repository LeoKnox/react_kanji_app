import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, Button, FlatList } from "react-native";
import client from "./../../api/client";

class Listview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    async componentDidMount() {
        try {
            const response = await client.get("/");
            if (!response.ok) {
                this.setState({ data: response.data });
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { data } = this.state;
        const myText = "learn Kanji while I learning programming";
        return (
            <SafeAreaView style={styles.center}>
                <Text style={styles.baseText}>Kanji Training App</Text>
                <Text style={styles.newText}>{myText}</Text>
                <Text style={styles.title}>List View</Text>
                <Button
                    title="list Item, Click for Details"
                    onPress={() => this.props.navigation.navigate("Detail")}
                />
                <Text>{data.length} Kanji</Text>
                <FlatList
                    data = {data}
                    keyExtractor={(item) => item.idkanji_dict.toString()}
                    renderItem={({ item }) => (
                        <Text style={styles.itemText}>
                            {item.kanji}: {item.meaning}
                        </Text>
                    )}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 36,
        marginBottom: 16,
    },
    baseText: {
        color: "navy",
        fontSize: 30,
        fontStyle: "italic",
    },
    newText: {
        color: "red",
    },
    itemText: {
        color: "green",
        fontSize: 20,
    }
});

export default Listview;