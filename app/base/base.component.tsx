import React from "react";
import { View } from "react-native";
import Header from "../components/header/header.component";
import SnackBar from "../components/alerts/snackbar/snackbar";

export function withBase(WrapperClass: any) {
    return function (props: any) {
        const { showHeader, headerOptions, onheaderItemPress, children, message, messageType, alertDialog } = props;
        return <View style={{ flexGrow: 1, flexDirection: 'column' }}>
            {headerOptions && <Header headerOptions={headerOptions} onheaderItemPress={(val) => onheaderItemPress && onheaderItemPress(val)} />}
            <View style={{ flexGrow: 1 }}>
                {children}
            </View>
            {message && <SnackBar message={message} messageType={messageType} />}
            {alertDialog ? alertDialog : null}
        </View >


    }
}