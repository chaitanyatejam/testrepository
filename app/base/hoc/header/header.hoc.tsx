import React, { Component, ComponentClass } from 'react';
import { View } from 'react-native';
import Header from '../../../components/header/header.component';

export function withHeader(WrapperClass: any, headerOptions: any) {
    return class <P extends ComponentClass> extends Component<any, any> {

        render() {
            const { onItemPress, children } = this.props;
            return <View>
                <Header headerOptions={headerOptions} onItemPress={(val) => onItemPress && onItemPress(val)} />
                <WrapperClass>{children}</WrapperClass>
            </View>
        }
    }
}