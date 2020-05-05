import React from 'react';
import { Text } from 'react-native';
import { headerText } from '../styles/text.styles';

export function withHeader1Style() {
    return function (props: any) {
        return <Text style={headerText}>{props.children}</Text>
    }
}

export const HeaderText = withHeader1Style();