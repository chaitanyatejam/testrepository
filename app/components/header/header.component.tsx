
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ViewProps } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { headerStyles } from './style/header.style';

interface HeaderPorps {
    headerOptions?: any,
    style?: ViewProps,
    onheaderItemPress?: any
}
class Header extends Component<HeaderPorps, any> {
    render() {
        const { leftIcon, title, rightIcons } = this.props.headerOptions;
        return <View
            style={headerStyles.containerStyle}>
            {leftIcon && this.renderLeftIcon(leftIcon)}
            {title && this.renderTitle(title)}
            {rightIcons && this.renderRightIcons(rightIcons)}
        </View>
    }

    private renderRightIcons(rightIcons: []) {
        return rightIcons.map((rightIcon: any) => {
            return <TouchableOpacity style={headerStyles.iconcontainerStyle}>
                <Icon name={rightIcon.name} size={20} color={rightIcon.color} />
            </TouchableOpacity>;
        })
    }

    private renderTitle(title: string) {
        return <View style={headerStyles.titleStyle}>
            <Text>{title}</Text>
        </View>
    }

    private renderLeftIcon(leftIcon: any) {
        const { onheaderItemPress } = this.props;
        return <TouchableOpacity style={headerStyles.iconcontainerStyle} onPress={() => onheaderItemPress && onheaderItemPress(leftIcon.name)}>
            <Icon name={leftIcon.name} size={20} color={leftIcon.color} />
        </TouchableOpacity>;
    }
}



export default Header;