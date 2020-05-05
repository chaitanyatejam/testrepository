import React, { Component } from 'react';
import { FlatList, View, TouchableOpacity } from 'react-native';
import { HeaderText } from "../../base/hoc/text/text.hoc";
import { Colors } from '../../colors/colors';

const data = [
    {
        name: "item1",
        key: 1,
        data: [
            {
                name: "sub item11",
                key: 4,
            },
            {
                name: "sub item12",
                key: 5,
            },
            {
                name: "sub item13",
                key: 6,
            }
        ]
    },
    {
        name: "item2",
        key: 2,
        data: [
            {
                name: "sub item21",
                key: 7,
            },
            {
                name: "sub item22",
                key: 8,
            },
            {
                name: "sub item23",
                key: 9,
            }
        ]
    },
    {
        name: "item3",
        key: 3
    }
]

export default class ExpandableList extends Component<any, any>{
    listItems = [][20][20];
    constructor(props: any) {
        super(props);
        this.state = {
            openedPosition: 0,
            leftMargin: 10
        }
    }
    _renderItem = (item: any, parentIndex: number, leftMargin: number) => {
        return <TouchableOpacity style={{ width: '50%', margin: 10, marginLeft: leftMargin + 10, backgroundColor: Colors.app_default_color }} key={item.name} onPress={() => this.setState({ openedPosition: parentIndex })}>
            <HeaderText>{item.name}</HeaderText>
            {parentIndex === this.state.openedPosition && item.data && item.data.map((item: any, index: number) => this._renderItem(item, index, leftMargin))}
        </TouchableOpacity >
    }

    render() {
        return <FlatList
            styl={{ flex: 1, backgroundColor: 'white', width: 400 }}
            data={data}
            renderItem={({ item, index }) => this._renderItem(item, index, this.state.leftMargin)}
        ></FlatList>
    }
}

