import React from 'react';
import { Modal, View, Text, Button } from "react-native";
import { alertStyle as styles } from './style';

interface IAlertDialog {
    alertMessage: string,
    okText?: string,
    cancelText?: string,
    onOkPress?: any,
    onCancelPress?: any,
}

export default function AlertDialog(props: IAlertDialog) {
    const { alertMessage, okText, cancelText, onOkPress, onCancelPress } = props;

    return <Modal
        visible={alertMessage ? true : false}
        transparent
        animated={true}
        animationType={'fade'}>
        <View style={styles.contentContainer}>
            <View style={styles.container} >
                <Text>{alertMessage}</Text>
                <View style={styles.buttonsContainer}>
                    {okText && <Button title='OK' onPress={() => onOkPress && onOkPress()} />}
                    {cancelText && <Button title='CANCEL' onPress={() => onCancelPress && onCancelPress()} />}
                </View>
            </View>
        </View>
    </Modal>
}
