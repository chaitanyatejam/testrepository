
import React, { Component, createRef } from 'react';
import { TextInputProps, View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ITextInput extends TextInputProps {
    onFocus?: () => void
    onBlur?: () => void
    validate?: (field: any) => void
    secureTextEntry?: boolean,
    name: string
}
interface IInputState {
    value: string,
    borderColor: string,
    error?: string,
    secureTextEntry?: boolean,
    showPassword?: boolean
}

class RNTextInput extends Component<ITextInput, IInputState> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: '',
            borderColor: 'blue',
            error: '',
            secureTextEntry: props.secureTextEntry,
            showPassword: false
        }
        this.onChangeText = this.onChangeText.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        this.changeState = this.changeState.bind(this)

    }

    changeState(obj: {}) {
        this.setState(obj)
    }

    onChangeText(value: string) {
        this.setState({ value: value })
    }

    togglePassword() {
        this.changeState({ showPassword: !this.state.showPassword });
    }

    onFocus() {
        const { onFocus } = this.props;
        if (this.state.error) {
            this.changeState({ error: null })
        }
        onFocus && onFocus()
    }

    onBlur() {
        const { onBlur, validate } = this.props;
        validate && validate.call(this, null);
        onBlur && onBlur()
    }

    private inputRef = createRef<TextInput>();

    render() {
        const { value, borderColor, secureTextEntry, showPassword, error } = this.state;
        return <>
            <View style={{
                margin: 5,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: borderColor,
                height: 40,
                padding: 5,
                flexDirection: 'row',
                alignItems: 'center'
            }}>

                <TextInput
                    ref={this.inputRef}
                    value={value}
                    style={{
                        flex: 1
                    }}
                    secureTextEntry={secureTextEntry && !showPassword}
                    autoCorrect={false}
                    onChangeText={this.onChangeText}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
                {secureTextEntry && this.state.value.length > 0 &&
                    <TouchableOpacity onPress={this.togglePassword}>
                        <Icon name='info' size={15} />
                    </TouchableOpacity>
                }
            </View>
            {error ? <Text>{error}</Text> : null}
        </>
    }
}

export default RNTextInput;