import React, { useState, useEffect } from "react";
import { Pressable, StyleSheet, SafeAreaView, Text, FlatList, TouchableOpacity, CheckBox } from "react-native";
import client from "./../../api/client";
import Card from "./shared/card";

const ListView = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [isSelected, setSelection] = useState(false);
    //const grade = 2;

    const getList = async (grade = 2) => {
        const response = await client.get("/grade/?grade="+grade);
        setData(response.data);
    };
/*
    function MyCheckbox({grade}) {
        const [isSelected, setSelection] = useState(false);
        if (isSelected) {
            getList(3);
            console.log(grade);
            setSelection(!isSelected);
        }
        return (
            <>
            <CheckBox
                value={isSelected}
                title="My Checkbox"
                onValueChange={(setSelection)}
            />
            <Text>T: {isSelected ? "1" : "2"}</Text>
            </>
        )
    }

    useEffect(() => {
        getList();
    }, []);

    const setSelections = (value) => {
        if (isSelected === false) {
            isSelected = true;
            console.log("one");
        } else {
            isSelected = false
        }
        console.log(value);
    };
    */
    const mytext = "learn Kanji";
    return (
        /*
        <SafeAreaView style={styles.center}>
            <Text style={styles.baseText}>Kanji Learning App</Text>
            <Text style={styles.newText}>{mytext}</Text>
            <Text>{data.length} Kanjis</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.idkanji_dict.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Detail", {objurl: item, hey: "It's Kanji"});
                            }}
                        >
                            <Card
                                kanji={item}
                                meaning={item}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </SafeAreaView>*/
        <p>ddd {data[0]}</p>
    )
};

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
    },
    checkbox: {
    },
});

export default ListView;