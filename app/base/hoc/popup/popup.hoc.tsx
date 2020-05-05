import React, { Component } from 'react';
import { View, Modal, ModalBaseProps } from 'react-native';

interface IPopup {

}

export function withPopUp(WrapperClass: any) {
    return class extends Component<ModalBaseProps, any> {

        render() {
            const { visible, transparent, animated, animationType, children } = this.props;
            return <Modal
                visible={visible}
                transparent={transparent}
                animated={animated}
                animationType={animationType}
            >
                <WrapperClass>{children}</WrapperClass>
            </Modal>

        }
    }
}