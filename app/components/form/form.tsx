import React, { Component } from 'react';
import { View } from 'react-native';
import RNButton from '../button/button';

interface IForm {
    title: string,
    cancel?: boolean,
    onFormSubmit: () => void,
    onFormCancel: () => void
}

export default class Form extends Component<any, any>{



    render() {
        return (
            <View style={{ backgroundColor: 'white', padding: 10, flexGrow: 0 }}>
                {this.props.children}
                {this.renderActionButtons()}
            </View>
        )
    }
    renderActionButtons() {

        return <View style={{ flexDirection: 'row' }}>
            {this.props.cancel && <RNButton title='Cancel' />}
            <RNButton title='Ok' />
        </View>
    }

}