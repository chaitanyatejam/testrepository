import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";

export function withDialog(WrapperClass: any) {
    return function (props: any) {
        const { } = props;
        return <Modal
            visible={true}
            animated={true}
            animationType={'fade'}>
            <View style={{ flex: 1, backgroundColor: '#00000099', justifyContent: "center", padding: 20, borderRadius: 5 }}>
                <TouchableOpacity>
                    
                </TouchableOpacity>
                <WrapperClass>
                    {props.children}
                </WrapperClass>
            </View>
        </Modal>



    }
}