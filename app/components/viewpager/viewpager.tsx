
import React, { createRef, Component } from 'react';
import { ScrollView, ViewStyle } from 'react-native';
import { DEVICE_WIDTH } from '../../base/constants';

interface IViewPager {
    scrollEnabled?: boolean,
    contentContainerStyle?: ViewStyle,
    style?: ViewStyle,
    horizontal?: boolean,
    children?: any

}

export default class ViewPager extends Component<IViewPager, any> {
    private scrollRef = createRef<ScrollView>();
    scrollToPosition = function (index: number) {
        if (this.scrollRef)
            this.scrollRef.current.scrollTo({ x: DEVICE_WIDTH * index, y: 0, animated: true });
    }
    render() {
        const { scrollEnabled, contentContainerStyle, style, horizontal, ...rest } = this.props;
        return <ScrollView
            ref={this.scrollRef}
            pagingEnabled={true}
            scrollEnabled={scrollEnabled}
            contentContainerStyle={contentContainerStyle}
            style={style}
            horizontal={horizontal}
            showsHorizontalScrollIndicator={false}
            {...rest}
        >
            {this.props.children}
        </ScrollView>
    }

}