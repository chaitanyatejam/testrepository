import React, { Component } from 'react';
import { View, Modal } from 'react-native';

export default class Popup extends Component<any, any> {
    static defaultProps = {
        animationType: 'slide',
        animated: true,
        transparent: false
    }
    render() {
        const { showPopup, transparent, animated, animationType } = this.props;
        return <Modal
            visible={showPopup}
            transparent
            animated={animated}
            animationType={animationType}
        >
            <View style={{ flex: 1, backgroundColor: 'red', margin: 60, borderRadius: 20 }} />

        </Modal>

    }
}