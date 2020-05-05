import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ViewPager from '../../../components/viewpager/viewpager';
import { createRef } from 'react';

interface IbottomBar {
    items: [],
    onItemPresss: (item: IbottomItem) => void
}

interface IbottomItem {
    name: string,
    icon: string,
}
interface IbottomState {
    selectedItem: boolean
}

export function withBottomBar(WrapperClass: any) {
    return class extends Component<IbottomBar, IbottomState> {
        constructor(props: any) {
            super(props);
            this.state = {
                selectedItem: props.items[0]
            }

        }
        private vpRef = createRef<ViewPager>();

        onItemPresss = function () {
            if (this.vpRef && this.vpRef.current && this.vpRef.current.scrollToPosition)
                this.vpRef.current.scrollToPosition(this.index)
            this.props.onItemPresss && this.props.onItemPresss(this.item)
        }

        renderItems = function (item: IbottomItem, index: number) {
            console.log(index);
            return <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', flex: 1 }} onPress={this.onItemPresss.bind({ item, index, props: this.props, vpRef: this.vpRef })} >
                <Icon name='info' size={15} />
                <Text>{item.name}</Text>
            </ TouchableOpacity>
        }

        render() {
            const { items } = this.props;
            console.log(this.props.children);
            return <>
                <View style={{ flexGrow: 1, backgroundColor: 'lightgray' }}>
                    <ViewPager
                        ref={this.vpRef}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={{ flexGrow: 1 }}
                        scrollEnabled={false}
                        horizontal
                    >
                        {this.props.children}
                    </ViewPager>
                </View>
                <View
                    style={{ height: 50, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center' }}>
                    {items.map((item, index) => this.renderItems(item, index))}
                </View>

            </>

        }
    }
}