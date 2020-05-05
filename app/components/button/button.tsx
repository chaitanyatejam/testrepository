import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface IButton {
    title: string,
    onPress?: () => void
}

export default function RNButton(props: IButton) {
    const { title, onPress } = props;
    return <TouchableOpacity onPress={onPress}
        style={{
            borderColor: 'blue',
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            margin: 5,
            width: 100,
            alignItems: 'center'
        }}>
        <Text>{title}</Text>
    </TouchableOpacity>
}

