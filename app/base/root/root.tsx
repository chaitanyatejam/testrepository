import React, { PureComponent } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import HomePage from '../../pages/home/home.page';
import SnackBar from '../../components/alerts/snackbar/snackbar';
import { NETWORK_ERROR } from '../../constants/error';
import { Store } from '../../store/store';
import { hideActivityIndicator } from '../../actions/activityindicator';
import Login from '../../pages/login/login';

class Root extends PureComponent<any, any> {
    constructor(props: any) {
        super(props);
        this.onOkPress = this.onOkPress.bind(this);
    }
    onOkPress() {
        Store.dispatch(hideActivityIndicator());
    }

    render() {
        const { showIndicator, showNetworkError } = this.props;
        return <>

            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView
                    scrollEnabled={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="always"
                    contentInsetAdjustmentBehavior="automatic">
                    {showIndicator && 0 ? <ActivityIndicator /> : <HomePage />}
                    {showIndicator && <SnackBar message={NETWORK_ERROR} onOkPress={this.onOkPress} />}
                </ScrollView>
            </SafeAreaView>
        </>

    }
}


function mapStateToProps(state: any) {
    return { showIndicator: state.indicator.showIndicator }
}
function mapDiapatchtoProps(dispatch: any) {
    return {
        hideActivityIndicator: () => dispatch(hideActivityIndicator)
    }
}

export default connect(mapStateToProps, mapDiapatchtoProps)(Root);