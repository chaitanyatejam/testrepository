import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { snackBarstyle as styles } from './style.snackbar';

export default function SnackBar(props: any) {

    return <View style={styles.snackbar}>
        <Text>{props.message}</Text>
        <TouchableOpacity onPress={props.onOkPress}>
            <Text>OK</Text>
        </TouchableOpacity>
    </View>
}
