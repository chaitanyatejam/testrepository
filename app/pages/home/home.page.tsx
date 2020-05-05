import React, { Component, createRef } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { headerOptions } from "../../components/header/constants/header.constants";
import { HeaderText } from "../../base/hoc/text/text.hoc";
import { withBase } from "../../base/base.component";
import AlertDialog from "../../components/alerts/alertdialog/alertdialog";
import { connect } from "react-redux";
import { showActivityIndicator } from '../../actions/activityindicator/activityindicator';
import { withBottomBar } from '../../base/hoc/bottombar/withbottombar';
import { DEVICE_WIDTH } from '../../base/constants';

const WithBase = withBase(View);
const WithBottomBar = withBottomBar(View);
window.curretPage = 'HomePage';
const items = [{ name: 'Home' }, { name: 'Categories' }, { name: 'Search' }, { name: 'Offers' }, { name: 'Cart' }]
class HomePage extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            alertMessage: null,
        }
        this.onheaderItemPress = this.onheaderItemPress.bind(this)
    }

    onheaderItemPress() {
        const { showActivityIndicator } = this.props;
        showActivityIndicator && showActivityIndicator()
    }

    renderBody = (item) => {
        return <View style={{ backgroundColor: 'red', width: DEVICE_WIDTH }} key={item.name}>
            <HeaderText>{item.name}</HeaderText>
        </View>
    }

    render() {

        return <>
            <WithBase
                alertMessage={this.state.alertMessage}
                headerOptions={headerOptions}
                message={this.state.alertMessage}
                alertDialog={
                    <AlertDialog
                        alertMessage={this.state.alertMessage}
                        okText={"ok"}
                        onOkPress={() => this.setState({ alertMessage: null })}
                    />}

                onheaderItemPress={this.onheaderItemPress}
                {...this.props}>
                <WithBottomBar onItemPresss={(item) => console.log(item)} items={items}>
                    {items.map(item => this.renderBody(item))}
                </WithBottomBar>

            </WithBase>
        </>


    }
}

const mapStateToProps = function (state: any) {
    return {}
}
const mapDispatchToProps = function (dispatch: any) {
    return {
        showActivityIndicator: () => dispatch(showActivityIndicator())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);